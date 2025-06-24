import Button from "@/components/Button"

const trainerList = [
    {
        sesi: 4,
        harga: {
            perSesi: 400000,
            total: 1150000
        },
    },
    {
        sesi: 8,
        harga: {
            perSesi: 2072700,
            total: 259008
        },
    },
    {
        sesi: 16,
        harga: {
            perSesi: 223875,
            total: 3582000
        },
    },
]

export default function TrainerList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainerList.map((trainer, index) => (
                <div 
                    key={index} 
                    className="flex flex-col items-center p-4 py-8 border border-primary rounded-2xl"
                >
                    <h3 className="text-3xl md:text-5xl font-semibold text-primary">
                        Sesi {trainer.sesi}
                    </h3>
                    <p className="italic text-2xl mt-5">
                        Rp {trainer.harga.total.toLocaleString()}
                    </p>

                    <div className="w-full border border-light my-5"></div>

                    <p className="text-xl md:text-3xl">
                        Rp {trainer.harga.perSesi.toLocaleString()} /sesi
                    </p>

                    <Button variant="primary" className="mt-8 w-full flex items-center justify-center">
                        Pilih
                    </Button>
                </div>
            ))}
        </div>
    )
}