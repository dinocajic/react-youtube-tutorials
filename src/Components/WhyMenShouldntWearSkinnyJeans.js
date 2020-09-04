import React from 'react';

function WhyMenShouldntWearSkinnyJeans() {

    return(
        <div className="bad-decisions">
            <ul>
                <li>Because they look terrible</li>
                <li>Because they give you Froto-looking feet</li>
                <li>Because they cause tension in your ...umm...relationship</li>
            </ul>
        </div>

        // React.createElement(
        //     'div',
        //     null,
        //     React.createElement(
        //         'ul',
        //         null,
        //         React.createElement('li', null, 'Because they look terrible'),
        //         React.createElement('li', null, 'Because they give you Froto-looking feet'),
        //         React.createElement('li', null, 'Because they cause tension in your ...umm...relationship')
        //     )
        // )
    );
}

export default WhyMenShouldntWearSkinnyJeans;
