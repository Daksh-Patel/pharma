import { notFound } from "next/navigation"
import { productCategories } from "@/config/productCategories"
import ProductCategoryClient from "@/components/products/productCategoryClient"

// Required for static export
export async function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }) {
  const { slug } = await params // 👈 IMPORTANT

  const category = productCategories.find((item) => item.slug === slug)

  if (!category) {
    notFound()
  }

  return <ProductCategoryClient category={category} />
}
