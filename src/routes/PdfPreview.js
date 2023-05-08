import React, { useState } from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import "./style/PdfPreview.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfPreview = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageScale, setPageScale] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div id='pdfViewer'>
            <Document
            file="/resume_20230424.pdf"
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page scale={pageScale} pageNumber={pageNumber} />
            </Document>
            <p className='page'>
                <button onClick={()=> pageNumber > 1 ? setPageNumber(pageNumber-1):null}>
                &lt;
                </button>
                <span>{pageNumber}/{numPages}</span>
                <button onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null}>
                &gt;
                </button>
            </p>
            <p className='page'>
                <button onClick={() => {
                        setPageScale((pageScale - 1) < 1 ? 1 : pageScale - 1)
                    }}> -
                </button>
                <button onClick={() => {
                        setPageScale(pageScale === 3 ? 3 : pageScale + 0.2)
                    }}> +
                </button>
            </p>
        </div>
    );
};

export default PdfPreview;