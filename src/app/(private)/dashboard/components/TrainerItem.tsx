import Button from "@/components/Button";
import { useTrainerPayment } from "@/hooks/useTrainerPayment";
import { formatRupiah } from "@/lib/format";

type TrainerItemProps = {
    content: {
        sesi: number;
        harga:  {
            perSesi: number;
            total: number;
        }
    }
}

export default function TrainerItem({
    content
}: TrainerItemProps) {
    const { createPayment } = useTrainerPayment();

    return (
        <div 
            className="flex flex-col items-center p-4 py-8 border border-primary rounded-2xl"
        >
            <h3 className="text-3xl md:text-5xl font-semibold text-primary">
                Sesi {content.sesi}
            </h3>
            <p className="italic text-2xl mt-5">
                Rp {formatRupiah(content.harga.total)}
            </p>

            <div className="w-full border border-light my-5"></div>

            <p className="text-xl md:text-3xl">
                Rp {formatRupiah(content.harga.perSesi)} /sesi
            </p>

            <Button 
                variant="primary" 
                className="mt-8 w-full flex items-center justify-center"
                onClick={() => {
                    createPayment({
                        sesi: content.sesi,
                        harga: content.harga.total
                    })
                }}
            >
                Pilih
            </Button>
        </div>
    )
}