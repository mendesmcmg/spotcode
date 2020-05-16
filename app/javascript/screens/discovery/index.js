import React, { Fragment } from 'react';
import SectionWrapper from '../../components/common/section_wrapper';
import NavbarFooter from '../../components/common/navbar_footer/index.js';
import Discovery from '../../components/discovery';

const DiscoveryScreen = () => {
    return(
        <Fragment>
            <SectionWrapper>
            <Discovery/>              
            </SectionWrapper>
            <NavbarFooter/>  
        </Fragment>
    );
}

export default DiscoveryScreen;