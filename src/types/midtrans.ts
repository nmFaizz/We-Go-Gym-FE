interface MidtransResult {
    status_code: string;
    status_message: string;
    transaction_id: string;
    order_id: string;
    merchant_id: string;
    gross_amount: string;
    currency: string;
    payment_type: string;
    transaction_time: string;
    transaction_status: string;
    fraud_status?: string;
    pdf_url?: string;
    finish_redirect_url?: string;
}

interface SnapOptions {
    onSuccess?: (result: MidtransResult) => void;
    onPending?: (result: MidtransResult) => void;
    onError?: (result: MidtransResult) => void;
    onClose?: () => void;
}

declare global {
    interface Window {
        snap: {
            pay: (token: string, options?: SnapOptions) => void;
        };
    }
}

export {};