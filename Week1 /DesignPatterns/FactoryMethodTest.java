package FactoryMethodPatternExample;

public class FactoryMethodTest {

    public static void main(String[] args) {

        DocumentFactory wordFactory =
                new WordDocumentFactory();

        DocumentFactory pdfFactory =
                new PdfDocumentFactory();

        DocumentFactory excelFactory =
                new ExcelDocumentFactory();

        Document wordDoc =
                wordFactory.createDocument();

        Document pdfDoc =
                pdfFactory.createDocument();

        Document excelDoc =
                excelFactory.createDocument();

        wordDoc.open();
        pdfDoc.open();
        excelDoc.open();
    }
}
