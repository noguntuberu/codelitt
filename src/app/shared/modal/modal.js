/** */
import React, { useEffect, createRef } from 'react';
import styles from './modal.module.css';

export const Modal = ({ children, title, show_title, show_modal, onClose }) => {
    /** REFS */
    const modal_veil = createRef();
    const modal_body = createRef();

    /** */
    useEffect(() => {
        if (show_modal) {
            fadeIn();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show_modal]);

    const closeModal = () => {
        modal_veil.current.click();
    }

    const fadeIn = () => {
        if (!modal_veil || !modal_veil.current) return;
        const veil = modal_veil.current; let opacity = 0;
        const body = modal_body.current;

        veil.style.display = 'flex';
        body.style.opacity = 0;
        const fade_in_animation = setInterval(() => {
            if (opacity > 0.4) {
                body.style.opacity = 1;
                clearInterval(fade_in_animation);
                return;
            }

            opacity += 0.1;
            veil.style.background = `rgba(0,0,0, ${opacity})`;
            body.style.opacity = opacity;
        }, 65);
    }

    const fadeOut = () => {
        if (!modal_veil || !modal_veil.current) return;

        const veil = modal_veil.current; let opacity = 0.4;
        const body = modal_body.current;

        const fade_out_animation = setInterval(() => {
            if (opacity <= 0) {
                veil.style.display = 'none';
                clearInterval(fade_out_animation);
                onClose();
                return;
            }

            opacity -= 0.1;
            veil.style.background = `rgba(0,0,0, ${opacity})`;
            body.style.opacity = opacity;
        }, 65);
    }

    return (
        <div>
            {<div className={styles.modal} ref={modal_veil} onClick={() => fadeOut()}>
                <div className={styles.modalBody} ref={modal_body} onClick={e => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        {show_title ? <div className={styles.modalTitle}> <h5>{title}</h5></div> : <div></div>}
                        <div className={`${styles.closeIcon} is-clickable`} onClick={() => fadeOut()}>&times;</div>
                    </div>
                    <div className={styles.modalContent}>
                        {React.Children.map(children, (child) => {
                            if (typeof child.type === 'string') return child;
                            return React.cloneElement(child, {
                                closeModal,
                            });
                        })}
                    </div>
                </div>
            </div>}
        </div>
    )
}