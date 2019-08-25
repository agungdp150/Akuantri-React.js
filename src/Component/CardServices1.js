import React from "react";

// Import Component
import ServicesT from "./ServicesT.js";
import ServicesM from "./ServicesM.js";
import ServicesP from "./ServicesP.js";
import ServicesMess from "./ServicesMess.js";
import ServicesTix from "./ServicesTix.js";


// Import Data
import Services1 from "../Assets/Data/Services1.js"
import Services2 from "../Assets/Data/Services2.js"
import Services3 from "../Assets/Data/Services3.js"
import Services4 from "../Assets/Data/Services4.js"
import Services5 from "../Assets/Data/Services5.js"

const CardServices1 = () => {
  const ServiceDetails = Services1.map((element, i) => {
    return  <ServicesT id={Services1[i].id} image={Services1[i].img} desc={Services1[i].desc} />
  });
  const ServiceDetails2 = Services2.map ((element, i) => {
    return <ServicesM id={Services2[i].id} image={Services2[i].img} desc={Services2[i].desc} />
  });
  const ServiceDetails3 = Services3.map ((element, i) => {
    return <ServicesP id={Services3[i].id} image={Services3[i].img} desc={Services3[i].desc} />
  });
  const ServiceDetails4 = Services4.map ((element, i) => {
    return <ServicesMess id={Services4[i].id} image={Services4[i].img} desc={Services4[i].desc} />
  });
  const ServiceDetails5 = Services5.map ((element, i) => {
    return <ServicesTix id={Services5[i].id} image={Services5[i].img} desc={Services5[i].desc} />
  });
  return (
    <div>
      <div className="h1-text">
      <h1>Layanan Kami</h1>
      </div>
      <div className="h1-text2">
      <h1>Transportasi & Logistik</h1>
      <p>Mau pergi atau ngirim barang? Pake Gojek aja, driver kami siap bantuin.</p>
      </div>
      <div className="container">      
      {ServiceDetails}
      </div>
      <div className="h1-text2">
      <h1>Makan & Belanja</h1>
      <p>Kamu bisa pesen makanan dari berbagai macam restoran, pesen obat dari berbagai macam apotek, dan belanja dari berbagai macam toko lewat aplikasi Gojek.</p>
      </div>
      <div className="container">      
      {ServiceDetails2}
      </div>  
      <div className="h1-text2">
      <h1>Pembayaran</h1>
      <p>Dari bayar transaksi sehari-hari, patungan, bayar tagihan, beli pulsa, sampe donasi, kita bikin semuanya jadi lebih mudah.</p>
      </div>
      <div className="container-1">      
      {ServiceDetails3}
      </div>
      <div className="h1-text2">
      <h1>Kebutuhan Harian</h1>
      <p>Ada kebutuhan sehari-hari yang mesti dilakuin? Kami punya berbagai layanan yang bisa menuhin kebutuhan harian kamu.</p>
      </div>
      <div className="container">      
      {ServiceDetails4}
      </div>  
      <div className="h1-text2">
      <h1>Berita & Hiburan</h1>
      <p>Mau nonton, beli tiket bioskop, konser, atau acara lainnya. Semuanya bisa, gak pake ngantri.</p>
      </div>
      <div className="container">      
      {ServiceDetails5}
      </div>  
    </div>
  );
}

export default CardServices1;