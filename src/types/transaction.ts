export type MembershipPayment = {
    membership_id: string;
    kode?: string;
    user_id?: string;
}

export type MembershipPaymentResponse = {
    token: string;
    redirect_url: string;
}