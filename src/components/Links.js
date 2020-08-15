import React from 'react';

const Links = ({ linkData }) => {
    return (
        <section className="links">
            <div className="links-inner">
                {
                    linkData.map(link => {
                        return (
                        <ul>
                            <li><h3>{link.title}</h3></li>
                            { link.links.map(childLinks => {
                                return (
                                    <li>
                                        <a href="#">{childLinks}</a>
                                    </li>
                                )
                            })
                            }
                        </ul>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Links;