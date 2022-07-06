import React,{useState,useEffect} from 'react'

import * as S from './SliderRocket.styled'
import { ISliderContent } from './SliderRocket.interface'


export const SliderRocket=({content}:ISliderContent)=>{

    const [index,setIndex]=useState(0)

      const setIndexSliderHandler= ()=>{
            if(index < content.length){
                setIndex(index+1)
           }else{
            setIndex(0)
           }
      }
   
    
    useEffect(() => {
      setTimeout( ()=>{
            setIndexSliderHandler()         
       },5000)
       
    })


    return (
        <S.SliderContainer>
             <S.TitleContainer>
               <S.Title>{content[index]?.title || content[0].title}</S.Title>
             </S.TitleContainer>
             <S.ImageContainer>
                <S.ImageAnimante src={content[index]?.image || content[0].image} />
            </S.ImageContainer>
            <S.BulletsContainer>

                {
                    content.map((item,key)=>{
                        return  <li key={key}><S.BulletsItem  active={key===index?true:false}/></li>                         
                        
                    })
                   
                }
               
            </S.BulletsContainer>
           
        </S.SliderContainer>
    )
}