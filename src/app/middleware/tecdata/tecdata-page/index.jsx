import React, { memo } from 'react';

import "../../../../style/tecdata/normalize.css";

/*Statik olarak PNG dosyalarını alana kadar ekliyoruz*/
import tecdatalogo from '../../../../statics/png/tecdata-images/tecdata.png';
import bmwlogo from '../../../../statics/png/tecdata-images/bmw.png';
import AcordionMenu from './acordion-list';
import TecDataTable from './partials/tec-data-table';

const TecDataPage = memo(() => {
  return (
    <>
    <div className="tecdata-wrapper">
      <div className="top-row d-flex justify-content-between">
        <div className="col-auto tecdata-logo">
          <img className="img-fluid" src={tecdatalogo} />
        </div>
        <div className="col-9 d-flex radio-buttons-row p-0">
          <span className="radio-buttons-pill-box-left">
            <ul className="d-flex flex-nowrap radio-buttons-list">
              <li>
                <input className="form-check-input" type="radio" name="vehicle" id="vehicle1" />
                <label className="form-check-label" htmlFor="vehicle1">
                  {' '}
                  BİNEK{' '}
                </label>
              </li>
              <li>
                <input className="form-check-input" type="radio" name="vehicle" id="vehicle2" />
                <label className="form-check-label" htmlFor="vehicle2">
                  HAFİF TİCARİ
                </label>
              </li>
              <li>
                <input className="form-check-input" type="radio" name="vehicle" id="vehicle3" />
                <label className="form-check-label" htmlFor="vehicle3">
                  AĞIR VASITA
                </label>
              </li>
              <li>
                <input className="form-check-input" type="radio" name="vehicle" id="vehicle4" />
                <label className="form-check-label" htmlFor="vehicle4">
                  MOTOSİKLET
                </label>
              </li>
              <li>
                <input className="form-check-input" type="radio" name="vehicle" id="vehicle5" />
                <label className="form-check-label" htmlFor="vehicle5">
                  {' '}
                  SUV{' '}
                </label>
              </li>
            </ul>
          </span>
          <span className="radio-buttons-pill-box-right">
            <ul className="d-flex flex-nowrap radio-buttons-list">
              <li>
                <input className="form-check-input" type="radio" name="vehicle" id="vehicle6" />
                <label className="form-check-label" htmlFor="vehicle6">
                  TÜRKİYEDEKİ ARAÇLAR
                </label>
              </li>
              <li>
                <input className="form-check-input" type="radio" name="vehicle" id="vehicle7" />
                <label className="form-check-label" htmlFor="vehicle7">
                  TÜM ARAÇLAR
                </label>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div className="d-flex align-items-stretch pill-buttons-row">
        <span className="select-pill-box-left">
          <select className="select-buttons">
            <option >Marka Seçiniz</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select className="select-buttons">
            <option >Model Seçiniz</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select className="select-buttons">
            <option>Tip Seçiniz</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </span>
        <span className="input-pill-box-right">
          <input className="input-buttons" placeholder="KBA KODU" />
          <input className="input-buttons" placeholder="MOTOR KODU" />
          <input className="input-buttons" placeholder="PERFORMAS KW" />
          <input className="input-buttons" placeholder="MODEL YILI" />
        </span>
      </div>
      <div className="row">
        <div className="col-2 d-flex flex-row brand-selection">
          <ul className="brand-select-scroll">
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
          </ul>
          <ul className="brand-select-scroll">
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
            <li>
              <img className="brand" src={bmwlogo} />
              <span>Insignia</span>
            </li>
          </ul>
        </div>
        <div className="col-7 middle-table">
          <table className="table">
            <thead>
              <tr>
                <th>Araç</th>
                <th>Yakıt</th>
                <th>
                  Performans<span>(KW)</span>
                </th>
                <th>Performans<span>(PS)</span></th>
                <th>Motor Kodu</th>
                <th>Model Yılı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
              <tr>
                <td className="first-column cell">MERCEDES-BENZ A SERİSİ (W176)A 160 (176.041)</td>
                <td className="cell">Dizel</td>
                <td className="cell">75</td>
                <td className="cell">102</td>
                <td className="cell">270,910</td>
                <td className="cell">06/2012-05/2018</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-auto">
        <AcordionMenu />
          {/*<div className="part-search-input">
            <label htmlFor="part-search" id="search-label">
              Montaj Grubu
            </label>
            <input type="text" id="search" placeholder="Tip Yazınız" />
            </div>*/}
          {/*
          <ul className="parts-acordion">
            <li tabIndex="1">Aksesuar</li>
            <li tabIndex="1">Direksiyon</li>
            <li tabIndex="1">Filtre</li>
            <li tabIndex="1">İç Donanım/Kol Dayama</li>
            <li tabIndex="1">Karoseri</li>
            <li tabIndex="1">Motor</li>
            <li tabIndex="1">Isıtma/Havalandırma</li>
            <li tabIndex="1">Triger</li>
            <li tabIndex="1">Motosiklet</li>
            <li tabIndex="1">Karoseri</li>
            <li tabIndex="1">Motor</li>
          </ul> */}
        </div>
      </div>
      <br/><br/>
      <section className="data-table-section">
        <TecDataTable/>
      </section>
      </div>
      </>
   
  );
});

export default TecDataPage;
