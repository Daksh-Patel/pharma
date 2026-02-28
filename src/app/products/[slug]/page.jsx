import { notFound } from "next/navigation"
import { productCategories } from "@/config/productCategories"
import ProductCategoryClient from "@/components/products/productCategoryClient"

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug,
  }))
}

export const dynamicParams = false

export default async function CategoryPage({ params }) {
  const { slug } = await params // ✅ REQUIRED in Next 16

  const category = productCategories.find((item) => item.slug === slug)

  if (!category) {
    notFound()
  }

  return <ProductCategoryClient category={category} />
}
