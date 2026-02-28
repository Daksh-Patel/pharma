import Image1 from "@/assets/images/banner_img1.png"
import Image2 from "@/assets/images/banner_img2.png"
import Image3 from "@/assets/images/banner_img3.png"

export const productCategories = [
  {
    title: "Cardiovascular",
    slug: "cardiovascular",
    bannerImages: [Image1, Image2],
    products: [
      {
        id: 1,
        name: "Lisinopril Tablets USP",
        strength: "5 mg, 10 mg, 20 mg",
        form: "Tablets",
      },
      {
        id: 2,
        name: "Losartan Potassium Tablets",
        strength: "25 mg, 50 mg",
        form: "Tablets",
      },
      {
        id: 3,
        name: "Ramipril Tablets",
        strength: "1.25 mg, 2.5 mg, 5 mg",
        form: "Tablets",
      },
    ],
  },
  {
    title: "Anti Diabetic",
    slug: "anti-diabetic",
    bannerImages: [Image3],
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
    title: "Anti Bacterial",
    slug: "anti-bacterial",
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
    title: "Anti Ulcer",
    slug: "anti-ulcer",
    bannerImages: [Image3],
    products: [
      {
        id: 1,
        name: "Omeprazole Capsules",
        strength: "20 mg, 40 mg",
        form: "Capsules",
      },
    ],
  },
  {
    title: "Anti Fungal",
    slug: "anti-fungal",
    bannerImages: [Image2, Image3],
    products: [
      {
        id: 1,
        name: "Fluconazole Tablets",
        strength: "150 mg",
        form: "Tablets",
      },
    ],
  },
  {
    title: "Anti Allergic",
    slug: "anti-allergic",
    bannerImages: [Image3, Image1],
    products: [
      { id: 1, name: "Cetirizine Tablets", strength: "10 mg", form: "Tablets" },
    ],
  },
  {
    title: "Pain Management",
    slug: "pain-management",
    bannerImages: [Image2],
    products: [
      {
        id: 1,
        name: "Paracetamol Tablets",
        strength: "500 mg, 650 mg",
        form: "Tablets",
      },
    ],
  },
  {
    title: "Food Supplements And Nutraceutical Products",
    slug: "nutraceutical",
    bannerImages: [Image3],
    products: [
      { id: 1, name: "Multivitamin Tablets", strength: "N/A", form: "Tablets" },
    ],
  },
]
