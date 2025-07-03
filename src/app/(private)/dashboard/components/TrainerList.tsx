import TrainerItem from "./TrainerItem"

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
            perSesi: 259008,
            total: 2072700
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
                <TrainerItem 
                    key={index}
                    content={trainer}
                />
            ))}
        </div>
    )
}