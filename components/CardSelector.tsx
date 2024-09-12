import React from 'react'
import useSWR from 'swr'
import {BsSearch} from 'react-icons/bs'
import {Autocomplete, Spinner, Text} from '@sanity/ui'
import {VariantsAPIDTO, getVariantTitle} from '../types/variant'

export const CardSelector = () => {
  const {data, error, isLoading} = useSWR<VariantsAPIDTO[]>(
    `${process.env.SANITY_STUDIO_API_BASE_PATH}/example`,

    (url) =>
      fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.SANITY_STUDIO_API_KEY}`,
        },
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error('Failed to fetch cards - status code: ' + res.status)
          } else {
            return res.json()
          }
        })
        .catch((err) => {
          console.error(err)
          throw new Error('Failed to fetch cards - message: ' + err?.message ?? 'unknown error')
        }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  )

  if (error) {
    return <Text>Failed to load cards: {error.message ?? 'Unknown error'}</Text>
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <Autocomplete
      icon={BsSearch}
      id="cardfinder"
      options={data?.map((variant) => ({
        id: variant.id,
        value: variant.id,
        payload: {
          variant: variant,
        },
      }))}
      placeholder="Search card variants"
      // custom search filter
      filterOption={(query, option) =>
        option.payload.variant.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      }
      // custom option render function
      renderOption={(option) => (
        <div
          style={{
            padding: '12px',
            cursor: 'default',
          }}
          className="custom-option"
        >
          <Text style={{margin: 0}}>{getVariantTitle(option.payload.variant)}</Text>
        </div>
      )}
      // custom value render function
      renderValue={(value, option) => {
        return getVariantTitle(option.payload.variant)
      }}
    />
  )
}
