import React from "react";
import content from "../../../content/content";

function CopyrightFooter() {
  return (
    <div className="text-center w-full phone2:w-[90%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-[27px]">
      <p>
        Razão Social: Ingrid Candido Vargas Rodrigues Sociedade Individual de
        Advocacia
      </p>
      <p className="mb-4">CNPJ: 54.994.667/0001-86</p>
      <p className="w-full opacity-75">{content.texts.footer.copyrightLine}</p>
      <p>
        <a
          className="transition hover:underline"
          target="_blank"
          href="https://www.paperstreet.com.br"
        >
          {" "}
          {content.texts.infos.footerDivulgacaoText}
        </a>
      </p>
    </div>
  );
}

export default CopyrightFooter;
