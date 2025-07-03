export type MembershipPayment = {
    membership_id: string;
    kode?: string;
    user_id?: string;
}

export type MembershipPaymentResponse = {
    token: string;
    redirect_url: string;
}

export type TrainerPayment = {
    harga: number;
    sesi: number;
}

export type TrainerPaymentResponse = {
    token: string;
    redirect_url: string;
}