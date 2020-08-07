import React from 'react';

function Modal(props) {
    let link = props.post.link;
    let id = link.split("v=");
    return (
        <div className="modal fade" id={"exampleModalCenter" + props.post.id} tabIndex={-1} role="dialog" aria-labelledby={props.post.name} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <iframe 
                        title="{props.post.name}"
                        width="750" 
                        height="500" 
                        src={"https://www.youtube.com/embed/" + id[1]} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Modal;
