import product1 from '../assets/images/content/product-1.jpg'
import product3 from '../assets/images/content/product-3.jpg'
import productFloor1 from '../assets/images/content/productFloor-1.jpg'
import productFloor2 from '../assets/images/content/productFloor-2.jpg'

const magazine = [
  {
    id: 'e9b4e9f6-f4da-4725-860b-ec965dcfe050',
    name: 'Mirror Look',
    mirrors: [
      {
        id: '23d8e4dc-c876-4b18-9c6e-bc8439985821',
        name: 'Зеркала',
        categories: [
          {
            id: 'ed24fdeb-84c4-4cc5-9518-e768e1e35cb6',
            name: 'Венецианские зеркала',
            products: [
              {
                id: '87ef588c-c539-45f8-b3bd-bc3b6f63cd20',
                name: 'Зеркало в металлической раме Kitech (Китех)',
                price: 25000,
                images: product1,
              },
              {
                id: 'ba64fb8a-d5e3-4cca-8c19-c1424e8c9a47',
                name: 'Зеркало в металлической раме Hi-Tech (Хайтэк)',
                price: 27500,
                images: product3,
              },
            ],
          },
          {
            id: 'cde28e4f-9a85-45a4-8509-cc2b60843775',
            name: 'Напольные зеркала',
            products: [
              {
                id: '2149ef1c-990f-4940-91d6-aa26a0c0277e',
                name: 'Зеркало в полный рост Line (Лайн)',
                price: 25000,
                images: productFloor1,
              },
              {
                id: '9918a242-1bf5-4a4c-b167-9dfb6c5910f8',
                name: 'Зеркало в полный рост Franco Mid (Франко)',
                price: 35000,
                images: productFloor2,
              },
            ],
          },
          {
            id: 'bcc898dc-8e11-4270-9184-d1366823c54e',
            name: 'Зеркала в рамах'
          },
          {
            id: 'a456ccf5-f940-45b7-81ac-427c86d7996e',
            name: 'зеркальное панно'
          },
          {
            id: '07d12d0d-5ad8-46d7-9596-42b3e2923a1a',
            name: 'Зеркало-солнце'
          },
          {
            id: 'b6283df7-a4d9-4357-a7c3-e29d50220f5a',
            name: 'Консоли'
          },
        ]
      }
    ]
  }
]



const normalizedMagazine = [

]

const normalizedCategories = [
  {
    id: 'ed24fdeb-84c4-4cc5-9518-e768e1e35cb6',
    name: 'Венецианские зеркала',
    products: [
      '87ef588c-c539-45f8-b3bd-bc3b6f63cd20',
      'ba64fb8a-d5e3-4cca-8c19-c1424e8c9a47',
    ]
  },
  {
    id: 'cde28e4f-9a85-45a4-8509-cc2b60843775',
    name: 'Напольные зеркала',
    products: [
      '2149ef1c-990f-4940-91d6-aa26a0c0277e',
      '9918a242-1bf5-4a4c-b167-9dfb6c5910f8',
    ]
  },
];





const normalizedProducts = [
  {
    id: '87ef588c-c539-45f8-b3bd-bc3b6f63cd20',
    name: 'Зеркало в металлической раме Kitech (Китех)',
    price: 25000,
    images: product1,
  },
  {
    id: 'ba64fb8a-d5e3-4cca-8c19-c1424e8c9a47',
    name: 'Зеркало в металлической раме Hi-Tech (Хайтэк)',
    price: 27500,
    images: product3,
  },
  {
    id: '2149ef1c-990f-4940-91d6-aa26a0c0277e',
    name: 'Зеркало в полный рост Line (Лайн)',
    price: 25000,
    images: productFloor1,
  },
  {
    id: '9918a242-1bf5-4a4c-b167-9dfb6c5910f8',
    name: 'Зеркало в полный рост Franco Mid (Франко)',
    price: 35000,
    images: productFloor2,
  },
];

const mirrors = magazine[0].mirrors[0]
export {mirrors, normalizedCategories, normalizedProducts}



