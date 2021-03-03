import React, { memo, useState } from 'react';
import Swal from 'sweetalert2';

import PopUp from '../../../components/PopUp';

const AddBasket = memo(({close, typesLeft, setTypesLeft}) => {
    const [value, setValue] = useState("");
    
    return (
        <>
            <PopUp
                title="Sepet Ekle"
                className="add-basket-popup-overlay"
                close={close}
            >
                <div className="add-basket-popup">
                    <p className="add-basket-text font-weight-bold">Sepet Ekle</p>
                    <input
                        className="add-basket-input"
                        type="text"
                        placeholder="Sepet Adı"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                        className="add-basket-submit"
                        onClick={() => {
                            if (value) {
                                setTypesLeft([
                                    ...typesLeft,
                                    {
                                        id: typesLeft.length + 1,
                                        name: value,
                                    }
                                ]);
                                close(false);
                            } else {
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Uyarı!',
                                    text: 'Devam etmek için bir şeyler girin!',
                                    confirmButtonText: 'Tamam',
                                })
                            }
                        }}
                    >
                        Gönder
                    </button>
                </div>
            </PopUp>
        </>
    );
});

export default AddBasket;