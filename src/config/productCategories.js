import Image1 from "@/assets/images/banner_img1.png"
import Image2 from "@/assets/images/banner_img2.png"
import Image3 from "@/assets/images/banner_img3.png"

export const productCategories = [
  {
    title: "Anti Diabetic",
    slug: "anti-diabetic",
    bannerImages: [Image1, Image2],
    products: [
      {
        id: 1,
        name: "Metformin Tablets",
        strength: "500 mg, 850 mg",
        form: "Tablets",
      },
      {
        id: 2,
        name: "Gliclazide Tablets",
        strength: "40 mg, 80 mg",
        form: "Tablets",
      },
    ],
  },
  {
    title: "Oncology",
    slug: "oncology",
    bannerImages: [Image3],
    products: [
      {
        id: 1,
        name: "Imatinib Tablets",
        strength: "100 mg, 400 mg",
        form: "Tablets",
      },
      {
        id: 2,
        name: "Capecitabine Tablets",
        strength: "500 mg",
        form: "Tablets",
      },
    ],
  },
  {
    title: "Antibiotics",
    slug: "antibiotics",
    bannerImages: [Image1],
    products: [
      {
        id: 1,
        name: "Amoxicillin Capsules",
        strength: "250 mg, 500 mg",
        form: "Capsules",
      },
      {
        id: 2,
        name: "Azithromycin Tablets",
        strength: "250 mg, 500 mg",
        form: "Tablets",
      },
    ],
  },
  {
    title: "Anti Hypertensive",
    slug: "anti-hypertensive",
    bannerImages: [Image3],
    products: [
      {
        id: 1,
        name: "Amlodipine Tablets",
        strength: "5 mg, 10 mg",
        form: "Tablets",
      },
      {
        id: 2,
        name: "Losartan Tablets",
        strength: "25 mg, 50 mg",
        form: "Tablets",
      },
    ],
  },
  {
    title: "Beta Lactum",
    slug: "beta-lactum",
    bannerImages: [Image2, Image3],
    products: [
      {
        id: 1,
        name: "Cefixime Tablets",
        strength: "200 mg",
        form: "Tablets",
      },
      {
        id: 2,
        name: "Ceftriaxone Injection",
        strength: "1 gm",
        form: "Injection",
      },
    ],
  },
  {
    title: "Nutraceuticals",
    slug: "nutraceuticals",
    bannerImages: [Image3],
    products: [
      {
        id: 1,
        name: "Multivitamin Tablets",
        strength: "N/A",
        form: "Tablets",
      },
      {
        id: 2,
        name: "Calcium + Vitamin D3",
        strength: "500 mg + 200 IU",
        form: "Tablets",
      },
    ],
  },
]
