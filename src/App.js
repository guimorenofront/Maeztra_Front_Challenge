import './App.scss';
import HeaderMobile from './components/Header/HeaderMobile';
import NotificationBar from './components/Notification-Bar';
import SliderComponent from './components/sliderComponent';
import SliderImage from './assets/header.png'
import SliderImageDesk from './assets/Fullbanner.png'

import Box from './assets/tips/Box.png';
import Discount from './assets/tips/Discount.png';
import Shipping from './assets/tips/Shipping.png';
import Storage from './assets/tips/Storage.png';
import World from './assets/tips/World.png';
import TipCard from './components/tipCard';
import Footer from './components/Footer';


import ann from './assets/Marcas/ann.png'
import comma from './assets/Marcas/comma.png'
import fore from './assets/Marcas/fore.png'
import me from './assets/Marcas/me.png'
import zara from './assets/Marcas/zara.png'
import BrandCard from './components/BrandCard';
import ProductCard from './components/ProductCard';


import Product1 from './assets/produto/Produto 01.png'
import Product2 from './assets/produto/Produto 03.png'
import InfoCard from './components/infoCard';
import NS from './components/Newsletter';
import TitleComp from './components/TitleComp';
import HeaderDesk from './components/Header/HeaderDesk';
import { useState } from 'react';
import Modal from './components/NSModal';
import { SocialArea } from './components/Footer/SocialArea';

function App() {
  const [ModalView, setModalView] = useState("flex")
  return (
    <div className="App">
      <Modal func={setModalView} value={ModalView}/>
      <NotificationBar />
      <HeaderMobile />
      <HeaderDesk/>
      <SliderComponent className={"FSliderM"}>
        <img src={SliderImage} />
        <img src={SliderImage} />
        <img src={SliderImage} />
      </SliderComponent>
      <SliderComponent className={"FSliderD"}>
        <img src={SliderImageDesk} />
        <img src={SliderImageDesk} />
        <img src={SliderImageDesk} />
      </SliderComponent>
      <section style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <TitleComp Title="Por que Comprar na Maeztra?" size={'16px'} />
        <SliderComponent settings={{
          infinite: true,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          mobileFirst: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 465,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            }
          ]
        }}>
          <TipCard Title="Produtos importados" subtitle="Produto de Alta Qualidade">
            <img src={World} />
          </TipCard>
          <TipCard Title="Estoque no Brazil" subtitle="Produtos mais perto de você!">
            <img src={Storage} />
          </TipCard>
          <TipCard Title="Trocas Garantidas" subtitle="Trocas em até 40 horas, veja as regras">
            <img src={Box} />
          </TipCard>
          <TipCard Title="Ganhe 5% off" subtitle="Pagando à vista no Cartão">
            <img src={Discount} />
          </TipCard>
          <TipCard Title="Frete Grátis" subtitle="Em compras acima de R$ 499,00">
            <img src={Shipping} />
          </TipCard>
        </SliderComponent>
        <TitleComp Title="Marcas Parceiras" />
        <SliderComponent settings={{
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          mobileFirst: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 465,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            }
          ]
        }}>
          <BrandCard>
            <img src={fore} alt="Marca" />
          </BrandCard>
          <BrandCard>
            <img src={comma} alt="Marca" />
          </BrandCard>
          <BrandCard>
            <img src={me} alt="Marca" />
          </BrandCard>
          <BrandCard>
            <img src={zara} alt="Marca" />
          </BrandCard>
          <BrandCard>
            <img src={ann} alt="Marca" />
          </BrandCard>
        </SliderComponent>
        <TitleComp Title="Mais Pedidas" />
        <SliderComponent className={"Product"} settings={{
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          mobileFirst: true,
          arrows: false,
          centerMode: true,
          responsive: [
            {
              breakpoint: 465,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            }
          ]
        }}>
          <ProductCard img={Product1} Name="Faux Suede Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 500,00" color1={"#DEAC71"} color2={"#D37164"} color3={"#6497D3"} color4={"#3C3B79"} />
          <ProductCard img={Product2} Name="Ruched Rose Print Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 320,00" color1={"#1C1A19"} color2={"#D84E4B"} color3={"#CFC9B0"} color4={"#EAE9E5"} />
          <ProductCard img={Product1} Name="Faux Suede Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 500,00" color1={"#DEAC71"} color2={"#D37164"} color3={"#6497D3"} color4={"#3C3B79"} />
          <ProductCard img={Product2} Name="Ruched Rose Print Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 320,00" color1={"#1C1A19"} color2={"#D84E4B"} color3={"#CFC9B0"} color4={"#EAE9E5"} />
          <ProductCard img={Product1} Name="Faux Suede Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 500,00" color1={"#DEAC71"} color2={"#D37164"} color3={"#6497D3"} color4={"#3C3B79"} />
        </SliderComponent>
        <InfoCard />
        <NS />
        <Footer />
        <SocialArea/>
      </section>
    </div>
  );
}

export default App;
