import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const productsSlice = createSlice({
    name:'products',
    initialState: {
        list:[
            {
                id:nanoid(),
                title:"Общая информация о процессе заедания, возможных причинах, и о переедании",
                description:"Небольшое видео + собрала несколько полезных техник для самоработы в гайд ",
                authorId:1,
                images:["https://avatars.mds.yandex.net/i?id=fac1f917c59abb032276d03094c5e6c3_l-4903160-images-thumbs&n=13", "https://avatars.mds.yandex.net/i?id=1eaeebdbae39e60d1d20cd58b4499f50_l-4908634-images-thumbs&n=13", "https://www.sunhome.ru/i/wallpapers/185/vankuver-v-sumerkah.orig.jpg"],
                linkToProduct:"https://drive.google.com/drive/folders/1-A3BMcldDLsnLQpVaq1oFiehxZStFkbl",
                price:0,
                rate:0,
                reviews:[],
                type:"guides"
            },
            {
                id:nanoid(),
                title:"Роадмап фронтенд",
                description:"Этот документ поможет тебе изучить все основы, требующиеся для разработки веб-приложений.Так как в роадмап будет входить освоение большого количества информации о технологиях и инструментах, в процессе изучения теории можно смело приступать к практике. Чем больше практики, тем лучше",
                authorId:2,
                images:["https://avatars.mds.yandex.net/i?id=183267dd11debd82da132559a9e71a96eeb90502-5194713-images-thumbs&n=13", "https://avatars.mds.yandex.net/i?id=7e9ed9c44b85fea6b3af6a6f095fdbfb_l-4936065-images-thumbs&n=13", "https://klike.net/uploads/posts/2023-03/1679037284_3-139.jpg"],
                linkToProduct:"https://docs.google.com/document/d/1jwTKr-xo6ZjAbrxqB3pEN6_12-voSyV0qav97BrBImE/",
                price:0,
                rate:0,
                reviews:[],
                type:"guides"
            },
            {
                id:nanoid(),
                title:"Webinar Роадмап фронтенд",
                description:"Webinar",
                authorId:2,
                images:["https://avatars.mds.yandex.net/i?id=183267dd11debd82da132559a9e71a96eeb90502-5194713-images-thumbs&n=13", "https://avatars.mds.yandex.net/i?id=7e9ed9c44b85fea6b3af6a6f095fdbfb_l-4936065-images-thumbs&n=13", "https://klike.net/uploads/posts/2023-03/1679037284_3-139.jpg"],
                linkToProduct:"https://docs.google.com/document/d/1jwTKr-xo6ZjAbrxqB3pEN6_12-voSyV0qav97BrBImE/",
                price:0,
                rate:0,
                reviews:[],
                type:"webinars"
            }
        ],
    },
    reducers:{
        addProduct:(state, {payload})=>{

        },
        editProduct:(state, {payload})=>{

        }
    }
});

export default productsSlice.reducer;


export const selectProductByType = (state, type) => state.products.list.filter(product => product.type === type);

export const selectProductById = (state, id)=> state.products.list.find(product=>product.id === id);