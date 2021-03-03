import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import svg from '../../../../statics/svg/bank-logos';

const BankAccounts = () => {
  const gql = useStaticQuery(graphql`
    {
      allBankAccountsJson {
        nodes {
          bankName
          bankBranch
          bankAccountCurrency
          iban
        }
      }
    }
  `);

  const navIcon = (className) => {
    const svgClass = className.split(' ');
    const banklogos = svgClass[0];
    const icon = svgClass[1];

    if (svg[banklogos][icon]) return svg[banklogos][icon]({ className: 'img-fluid' });
  };

  return (
    <section className="my-4">
      <div className="bank-boxes">
        <div className="card-columns">
          {gql.allBankAccountsJson.nodes.map((bank, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-header">
                  <div className="col-md-6 col-sm-6 col-xs-6">{navIcon(bank.bankName)}</div>
                </div>
                <div className="card-body">
                  <h6 className="card-title">
                    {bank.bankBranch} {/* <br/> {bank.bankAccountCurrency} */}
                  </h6>
                  <p className="card-text" />
                  <p className="card-text">
                    <span className="card-text">{bank.iban}</span>
                  </p>
                  <button className="btn card-btn">KOPYALA</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BankAccounts;
