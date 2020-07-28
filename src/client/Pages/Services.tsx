import React from 'react'


const Services: React.SFC = (props) => {
    return (
        <div className="container">
            <div className="m-5 p-5" id="heading">
                <h1>Designing your brand through...</h1>
            </div>
            <section className="row services">
                    <ul>
                        <h3>Print</h3>
                        <li>Invitations</li>
                        <li>Infographics</li>
                        <li>Posters</li>
                        <li>Brochures</li>
                        <li>Stickers</li>
                    </ul>
                    <ul>
                        <h3>Web</h3>
                        <li>Logo Design</li>
                        <li>Web Design</li>
                        <li>Social Media Content</li>
                        <li>Web Content</li>
                        <li>Promotional Videos</li>
                        <li>Animations</li>
                        <li>SEO Marketing</li>
                    </ul>
                    </section>
        </div>
    )
}

export default Services