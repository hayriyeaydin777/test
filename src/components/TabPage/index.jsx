import React, { memo, useState } from 'react';

const TabPage = memo(({component, tabs}) => {
    return (
        <>
            {
                tabs.map((tab) => {
                    return (
                        <section 
                            key={tab.id}
                            className={`page-tab ${component.id === tab.id ? "tab-active": "tab-passive"}`}>
                            {
                                tab.component &&
                                tab.component()
                            }
                        </section>
                    )
                })
            }
        </>
    );
});

export default TabPage;