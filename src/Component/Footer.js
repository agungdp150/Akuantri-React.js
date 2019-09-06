import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="bcg-foot">
        <footer className="container-2">
        <div className="code1">
          <img src="https://d1j87w3j7cc3a6.cloudfront.net/media/gojek/media/images/gojek-white-text.svg" alt="Logo"/>
        </div>
        <div className="code2">
          <h4>Tentang Gojek</h4>
          <p>Karir</p>
          <p>Blog</p>
          <p>Pusat Media</p>
          <p>Tentang Kami</p>
        </div>
        <div className="code3">
          <h4>Bantuan</h4>
          <p>Kontak Kami</p>
          <p>Kebijakan Privasi</p>
          <p>Syarat & Ketentuan</p>
          <p>Pusat Bantuan</p>
        </div>
        <div className="code4">
          <h4>Ikuti Kami</h4>
          <p><i class="fab fa-facebook-square fa-1x"/>Facebook</p>
          <p><i class="fab fa-twitter fa-1x"/>Twitter</p>
          <p><i class="fab fa-instagram fa-1x"/>Instagram</p>
          <p><i class="fab fa-youtube fa-1x"/>Youtube</p>
        </div>
        <div className="code5">
          <h4>Unduh</h4>
          <img src="https://lelogama.go-jek.com/component/nav/picture/google-play-badge3x-p.png" alt="play-btn"/>
          <br/>
          <img src="https://lelogama.go-jek.com/component/nav/picture/app-store-badge3x-p.png" alt="ios"/>
        </div>
        <div className="code6">
          <h4>Transportasi & Logistik</h4>
          <p>GoRide</p>
          <p>GoCar</p>
          <p>GoSend</p>
          <p>GoBox</p>
        </div>
        <div className="code7">
          <h4>Makan & Belanja</h4>
          <p>GoFood</p>
          <p>GoFood Festival</p>
          <p>GoMed</p>
        </div>
        <div className="code8">
          <h4>Pembayaran</h4>
          <p>Gopay</p>
          <p>GoBills</p>
          <p>GoPoint</p>
          <p>PayLater</p>
          <p>GoPulsa</p>
        </div>
        <div className="code9">
          <h4>Kebutuhan Harian</h4>
          <p>GoMassage</p>
          <p>GoClean</p>
          <p>GoAuto</p>
          <p>GoGlam</p>
          <p>GoLaundry</p>
          <p>GoDaily</p>
          <p>GoFix</p>
        </div>
        <div className="code10">
          <h4>Berita & Hiburan</h4>
          <p>GoPlay</p>
          <p>GoTix</p>
        </div>
        </footer>
        <div className="btn-cls">
        <div className="dropup">
        <button className="dropbtn"><i class="fas fa-map-marker-alt"/>Indonesia</button>
          <div className="dropup-content">
          <Link>Indonesia</Link>
            <Link>Singapore</Link>
            <Link>Thailand</Link>
            <Link>Vietnam</Link>
          </div>
          </div>
          </div>
          <hr/>
          <div class="ket-plus">&copy; 2019 Copyright TOdo Project
        <p>Gojek adalah merek milik PT Aplikasi Karya Anak Bangsa. Terdaftar pada Direktorat Jendral Kekayaan
          Intelektual Republik Indonesia.</p>
      </div>
      </div>
    )
  }
}
