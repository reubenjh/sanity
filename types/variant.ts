export type VariantsAPIDTO = {
  name: string
  id: string
  slug: string
  cardId: string
  cardSlug: string
  image: string
  finish: FinishEnum
  product: ProductEnum
  setName: string
}

enum FinishEnum {
  STANDARD = 'Standard',
  FOIL = 'Foil',
}

enum ProductEnum {
  BOOSTER = 'Booster',
  PRECONSTRUCTEDDECK = 'Preconstructed Deck',
  BOXTOPPER = 'Box Topper',
  PLEDGEPACK = 'Pledge Pack',
  PROMO = 'Promo',
}

const finishTextMap = {
  [FinishEnum.STANDARD]: '',
  [FinishEnum.FOIL]: ' (Foil)',
}

const productTextMap = {
  [ProductEnum.BOOSTER]: '',
  [ProductEnum.PRECONSTRUCTEDDECK]: ' | Preconstructed Deck',
  [ProductEnum.BOXTOPPER]: ' | Box Topper',
  [ProductEnum.PLEDGEPACK]: ' | Pledge Pack',
  [ProductEnum.PROMO]: ' | Promo',
}

export const getVariantTitle = (variant: VariantsAPIDTO) =>
  `${variant.name} — ${variant.setName}${productTextMap[variant.product as ProductEnum]}${
    finishTextMap[variant.finish as FinishEnum]
  }`
