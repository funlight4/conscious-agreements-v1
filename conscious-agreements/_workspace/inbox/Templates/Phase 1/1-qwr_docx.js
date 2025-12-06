const { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Header, Footer, PageNumber, NumberFormat, LevelFormat, Tab, TabStopType, TabStopPosition } = require('docx');
const fs = require('fs');

// Create the QWR document
const doc = new Document({
    sections: [{
        properties: {
            page: {
                margin: {
                    top: 1440, // 1 inch = 1440 twentieths of a point
                    right: 1440,
                    bottom: 1440,
                    left: 1440,
                }
            }
        },
        children: [
            // Instructions Box
            new Paragraph({
                children: [
                    new TextRun({
                        text: "INSTRUCTIONS FOR USE:",
                        bold: true,
                        size: 24,
                    }),
                ],
                spacing: { after: 200 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "1. Fill in all bracketed fields [LIKE THIS] with your information\n",
                        size: 22,
                    }),
                    new TextRun({
                        text: "2. Send via Certified Mail with Return Receipt Requested\n",
                        size: 22,
                    }),
                    new TextRun({
                        text: "3. Keep copies of everything including green card\n",
                        size: 22,
                    }),
                    new TextRun({
                        text: "4. Calendar 30 days from mailing - servicer must respond by law\n",
                        size: 22,
                    }),
                    new TextRun({
                        text: "5. This triggers RESPA protections - 12 USC 2605",
                        size: 22,
                    }),
                ],
                spacing: { after: 400 },
                border: {
                    top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                    bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                    left: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                    right: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                },
            }),

            // Sender Information
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[YOUR FULL NAME]",
                        highlight: "yellow",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[YOUR STREET ADDRESS]",
                        highlight: "yellow",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[CITY, STATE ZIP]",
                        highlight: "yellow",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[YOUR PHONE NUMBER]",
                        highlight: "yellow",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[YOUR EMAIL - OPTIONAL]",
                        highlight: "yellow",
                    }),
                ],
                spacing: { after: 400 },
            }),

            // Date
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[DATE]",
                        highlight: "yellow",
                    }),
                ],
                spacing: { after: 400 },
            }),

            // Certified Mail Line
            new Paragraph({
                children: [
                    new TextRun({
                        text: "SENT VIA CERTIFIED MAIL #",
                        bold: true,
                    }),
                    new TextRun({
                        text: " [CERTIFIED MAIL NUMBER]",
                        highlight: "yellow",
                    }),
                ],
                spacing: { after: 200 },
            }),

            // Recipient Information
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[SERVICER NAME]",
                        highlight: "yellow",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Attention: Customer Service - QWR Department",
                        bold: true,
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[SERVICER STREET ADDRESS]",
                        highlight: "yellow",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[CITY, STATE ZIP]",
                        highlight: "yellow",
                    }),
                ],
                spacing: { after: 400 },
            }),

            // Subject Line
            new Paragraph({
                children: [
                    new TextRun({
                        text: "RE: QUALIFIED WRITTEN REQUEST UNDER SECTION 6 OF RESPA",
                        bold: true,
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Loan Number: ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "[YOUR LOAN NUMBER]",
                        highlight: "yellow",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Property Address: ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "[PROPERTY STREET ADDRESS]",
                        highlight: "yellow",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "                     ",
                    }),
                    new TextRun({
                        text: "[PROPERTY CITY, STATE ZIP]",
                        highlight: "yellow",
                    }),
                ],
                spacing: { after: 400 },
            }),

            // Salutation
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Dear Loan Servicer:",
                    }),
                ],
                spacing: { after: 300 },
            }),

            // Opening Paragraph
            new Paragraph({
                children: [
                    new TextRun({
                        text: "This is a ",
                    }),
                    new TextRun({
                        text: "Qualified Written Request",
                        bold: true,
                    }),
                    new TextRun({
                        text: ' ("QWR") under Section 6 of the Real Estate Settlement Procedures Act ("RESPA"), ',
                    }),
                    new TextRun({
                        text: "12 U.S.C. § 2605",
                        italics: true,
                    }),
                    new TextRun({
                        text: ", and its implementing Regulation X, ",
                    }),
                    new TextRun({
                        text: "12 C.F.R. § 1024.35 and § 1024.36",
                        italics: true,
                    }),
                    new TextRun({
                        text: ".",
                    }),
                ],
                alignment: AlignmentType.JUSTIFIED,
                spacing: { after: 300 },
            }),

            // Second Paragraph
            new Paragraph({
                children: [
                    new TextRun({
                        text: "I am the borrower on the above-referenced loan. I am writing to request information and documentation regarding the servicing of my loan and to address concerns about the validity and ownership of the alleged debt.",
                    }),
                ],
                alignment: AlignmentType.JUSTIFIED,
                spacing: { after: 300 },
            }),

            // Request Header
            new Paragraph({
                children: [
                    new TextRun({
                        text: "I REQUEST THE FOLLOWING INFORMATION AND DOCUMENTATION:",
                        bold: true,
                        underline: {},
                    }),
                ],
                spacing: { before: 300, after: 300 },
            }),

            // Request Item 1
            new Paragraph({
                children: [
                    new TextRun({
                        text: "1. ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Loan History and Payment Records:",
                        bold: true,
                    }),
                ],
                spacing: { before: 200 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Complete payment history from the origination of the loan to present",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Current payoff amount with per diem interest calculation",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Breakdown of any suspense account or unapplied funds",
                    }),
                ],
                indent: { left: 720 },
                spacing: { after: 200 },
            }),

            // Request Item 2
            new Paragraph({
                children: [
                    new TextRun({
                        text: "2. ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Original Loan Documents:",
                        bold: true,
                    }),
                ],
                spacing: { before: 200 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Copy of the original promissory note with all endorsements and allonges",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Copy of the deed of trust or mortgage",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Copy of the original loan application",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Copy of the HUD-1 Settlement Statement or Closing Disclosure",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Copy of the Truth in Lending Act (TILA) disclosures",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Copy of the Notice of Right to Cancel",
                    }),
                ],
                indent: { left: 720 },
                spacing: { after: 200 },
            }),

            // Request Item 3
            new Paragraph({
                children: [
                    new TextRun({
                        text: "3. ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Ownership and Transfer Documentation:",
                        bold: true,
                    }),
                ],
                spacing: { before: 200 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Complete chain of title showing all transfers of the promissory note",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • All assignments of the deed of trust or mortgage",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Name and address of the current owner/holder of the promissory note",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Name and address of the current beneficiary of the deed of trust",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Documentation establishing your authority to service this loan",
                    }),
                ],
                indent: { left: 720 },
                spacing: { after: 200 },
            }),

            // Request Item 4
            new Paragraph({
                children: [
                    new TextRun({
                        text: "4. ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Securitization Information (if applicable):",
                        bold: true,
                    }),
                ],
                spacing: { before: 200 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Name of the trust that owns the loan",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Date the loan was securitized",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Copy of the Pooling and Servicing Agreement (PSA)",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Copy of the mortgage loan schedule showing my loan",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Evidence of compliance with the PSA regarding the transfer",
                    }),
                ],
                indent: { left: 720 },
                spacing: { after: 200 },
            }),

            // Request Item 5 - 8 (abbreviated for length)
            new Paragraph({
                children: [
                    new TextRun({
                        text: "5. ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Accounting and Fees",
                        bold: true,
                    }),
                    new TextRun({
                        text: " - Detailed breakdown of all fees and charges",
                    }),
                ],
                spacing: { after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "6. ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Default and Collection Information",
                        bold: true,
                    }),
                    new TextRun({
                        text: " - All notices and validation of debt",
                    }),
                ],
                spacing: { after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "7. ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Loan Modification/Loss Mitigation",
                        bold: true,
                    }),
                    new TextRun({
                        text: " - All agreements and correspondence",
                    }),
                ],
                spacing: { after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "8. ",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Additional Critical Information:",
                        bold: true,
                    }),
                ],
                spacing: { before: 200 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Evidence of any Federal Reserve discount window transactions involving my promissory note",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Documentation of the source of funds for the original loan",
                    }),
                ],
                indent: { left: 720 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "   • Proof of consideration provided by the lender",
                    }),
                ],
                indent: { left: 720 },
                spacing: { after: 400 },
            }),

            // Errors Section
            new Paragraph({
                children: [
                    new TextRun({
                        text: "ERRORS AND INFORMATION REQUESTS UNDER 12 C.F.R. § 1024.35:",
                        bold: true,
                    }),
                ],
                spacing: { before: 300, after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "I believe the following errors exist with respect to the servicing of my mortgage loan:",
                    }),
                ],
                spacing: { after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "[DESCRIBE ANY ERRORS YOU BELIEVE EXIST - e.g., incorrect payment application, unauthorized fees, improper notices, etc.]",
                        highlight: "yellow",
                    }),
                ],
                spacing: { after: 400 },
            }),

            // Statutory Obligations
            new Paragraph({
                children: [
                    new TextRun({
                        text: "STATUTORY OBLIGATIONS:",
                        bold: true,
                    }),
                ],
                spacing: { before: 300, after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "Please be advised of your obligations under RESPA:",
                    }),
                ],
                spacing: { after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "• You must acknowledge receipt of this QWR within 5 business days",
                    }),
                ],
                indent: { left: 360 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "• You must provide a written response within 30 business days",
                    }),
                ],
                indent: { left: 360 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "• During the 60-day period after receipt, you may not report overdue payments to credit agencies",
                    }),
                ],
                indent: { left: 360 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "• Failure to comply may result in actual damages, statutory damages up to $2,000, and attorney fees",
                    }),
                ],
                indent: { left: 360 },
                spacing: { after: 400 },
            }),

            // Preservation of Records
            new Paragraph({
                children: [
                    new TextRun({
                        text: "PRESERVATION OF RECORDS:",
                        bold: true,
                    }),
                ],
                spacing: { before: 300, after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "You are hereby notified to preserve all records, documents, and other evidence relating to this loan, whether in physical or electronic form. This includes but is not limited to all documents referenced in this request, all internal communications, and all data in any system relating to this account.",
                    }),
                ],
                alignment: AlignmentType.JUSTIFIED,
                spacing: { after: 300 },
            }),

            // Closing paragraphs
            new Paragraph({
                children: [
                    new TextRun({
                        text: "This request is made to address my concerns about the servicing of my loan and to obtain information necessary to determine the validity of the alleged debt and your authority to collect it. Time is of the essence in your response.",
                    }),
                ],
                alignment: AlignmentType.JUSTIFIED,
                spacing: { after: 300 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "I am exercising my rights under federal law and expect full compliance with your obligations under RESPA. Please provide actual documents, not summaries or account printouts, unless specifically requested otherwise.",
                    }),
                ],
                alignment: AlignmentType.JUSTIFIED,
                spacing: { after: 300 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "Thank you for your prompt attention to this matter.",
                    }),
                ],
                spacing: { after: 600 },
            }),

            // Signature Block
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Sincerely,",
                    }),
                ],
                spacing: { after: 800 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "_________________________________",
                    }),
                ],
                spacing: { after: 100 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "[YOUR PRINTED NAME]",
                        highlight: "yellow",
                    }),
                ],
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "Borrower",
                    }),
                ],
                spacing: { after: 200 },
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text: "Date: ",
                    }),
                    new TextRun({
                        text: "[DATE]",
                        highlight: "yellow",
                    }),
                ],
                spacing: { after: 400 },
            }),

            // CC Section
            new Paragraph({
                children: [
                    new TextRun({
                        text: "cc:",
                        bold: true,
                    }),
                ],
                spacing: { after: 100 },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Consumer Financial Protection Bureau",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[Your State] Attorney General",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[Your State] Department of Banking/Financial Regulation",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "[Your Attorney - if applicable]",
                        highlight: "yellow",
                    }),
                ],
            }),
        ],
    }],
});

// Generate and save the document
const { Packer } = require('docx');

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("/mnt/user-data/outputs/QWR_Template.docx", buffer);
    console.log("QWR Template DOCX created successfully!");
});
