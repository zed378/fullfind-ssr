import { useRef, useEffect } from "react";

// hooks
// import useIframeEvents from "hooks/iframeEvent";

const EmbeddedForm = () => {
  const iframeRef = useRef(null);

  // const eventData = useIframeEvents(iframeRef);

  useEffect(() => {
    console.log(iframeRef.current.parentElement.children[0]);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://api.leadconnectorhq.com/widget/form/VY2v0Sb3dlZHPzJna2nK"
      className="w-full h-full"
      id="inline-VY2v0Sb3dlZHPzJna2nK"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Opt-in (Ads Website FullFind)"
      data-height="609"
      data-layout-iframe-id="inline-VY2v0Sb3dlZHPzJna2nK"
      data-form-id="VY2v0Sb3dlZHPzJna2nK"
      title="Opt-in (Ads Website FullFind)"
    ></iframe>
  );
};

export default EmbeddedForm;
