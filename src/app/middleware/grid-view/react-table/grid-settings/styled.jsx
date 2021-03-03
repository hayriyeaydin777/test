import React, { memo } from 'react'
import styled from 'styled-components'

const Styled = memo(props => {

    const Styles = styled.div`
        padding-top: 2rem;
        padding-bottom: 2rem;

        table {
            border-spacing: 0;
            border: 1px solid black;
            width: 100%;

            tr {
                :last-child {
                    td {
                        border-bottom: 0;
                    }
                }
            }

            th,
            td {
                margin: 0;
                padding: 0.5rem;
                border-bottom: 1px solid black;
                border-right: 1px solid black;

                :last-child {
                    border-right: 0;
                }
            }
        }
    `
    
    return (
        <Styles>
            {props.children}
        </Styles>
    );
});

export default Styled;