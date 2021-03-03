import React from 'react';
import Footer from '../../footer';

const SatisfactionSurvey = (props) => {
  const surveyQuestions = [
    {
      id: 1,
      question: 'Genel ürün kalitesi',
    },
    {
      id: 2,
      question: 'Ürünlerimizin beklenen performansı karşılaması',
    },
    {
      id: 3,
      question: 'Ürünlerimizin fiyat politikası',
    },
    {
      id: 4,
      question: 'Ürünlerimizin bulunurluk derecesi',
    },
    {
      id: 5,
      question: 'Ürün çeşitliliği',
    },
    {
      id: 6,
      question: 'Satış destek(telefoncu) yeterliliği',
    },
    {
      id: 7,
      question: 'Satış desteğin taleplerinize cevap süresi',
    },
    {
      id: 8,
      question: 'Plasiyer yeterliliği',
    },
    {
      id: 9,
      question: 'Ambalaj kalitesi',
    },
    {
      id: 10,
      question: 'Taşıma kalitesi (nakliye) / süresi',
    },
    {
      id: 11,
      question: 'Şikayetlerinize olan genel yaklaşım',
    },
    {
      id: 12,
      question: 'Şikayetlerin çözüm süresi',
    },
    {
      id: 13,
      question: 'Gerektiğinde sorumlu kişilere ulaşabilme',
    },
    {
      id: 14,
      question: 'Müşteri ilişkilerinde ilgi, samimiyet, özen',
    },
    {
      id: 15,
      question: 'Satış sonrası hizmet ve desteklerimiz',
    },
    {
      id: 16,
      question: 'Ödeme koşulları ve vade',
    },
    {
      id: 17,
      question: 'Fatura ve irsaliyenin doğru / zamanında düzenlenmesi',
    },
    {
      id: 18,
      question: "B2B'de taleplerinizin karşılanma hızı",
    },
    {
      id: 19,
      question: "B2B'de kullanım kalitesi",
    },
    {
      id: 20,
      question: 'B2B sorunları için teknik destek verimliliği',
    },
    {
      id: 21,
      question: 'Genel olarak şirketimizle çalışma memnuniyeti',
    },
    {
      id: 22,
      question: 'Uzun vadeli işbirliğimiz hakkında görüşünüz',
    },
    {
      id: 23,
      question: 'Birlikte çalışma performansımızın geliştirilmesi için önerileriniz',
    },
  ];

  const surveyAnswers = [
    {
      id: 1,
      answer: 'Çok İyi',
    },
    {
      id: 2,
      answer: 'İyi',
    },
    {
      id: 3,
      answer: 'Orta',
    },
    {
      id: 4,
      answer: 'Kötü',
    },
    {
      id: 5,
      answer: 'Çok Kötü',
    },
  ];

  return (
    <>
      <div className="survey-wrapper">
        <p className="text-center survey-title">Müşteri Memnuniyet Anketi</p>
        <div className="container survey-container">
          {surveyQuestions.map((value, key) => {
            return (
              <>
                <div key={key} className="question-wrapper">
                  <div className="col-6 question">
                    <p>{value.question}</p>
                    {surveyAnswers.map((value, key) => {
                      return (
                        <div key={key} className="form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="inlineCheckbox1"
                            value="option1"
                          />
                          <label className="form-check-label" htmlFor="inlineCheckbox1">
                            {value.answer}
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  <div className="col-6 question-textarea-wrapper">
                    <textarea type="text" className="question-textarea" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="container survey-form-wrapper">
          <form className="survey-form">
            <p className="survey-form-title">Formu Doldurunuz</p>
            <div className="survey-form-body">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="brandname"
                  name="brandname"
                  placeholder="Vista Oto"
                  disabled
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="area"
                  name="area"
                  placeholder="Faaliyet Alanı"
                />
              </div>
            {/*   <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Adı Soyadı"
                  required
                />
              </div> */}
           {/*    <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Adres"
                id="address"
                name="address"
                />
              </div> */}
           {/*    <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Telefon"
                id="phone"
                name="phone"
                required
                />
              </div> */}
             {/*  <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Mail"
                id="mail"
                name="mail"
                required
                />
              </div> */}
              <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Bölge"
                id="region"
                name="region"
                />
              </div>
              <div className="text-center">
                <input type="submit" value="Kaydet" className="btn-block submit-survey" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SatisfactionSurvey;
