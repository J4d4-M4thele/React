import Car from "./Cars";

function Garage() {
    const cars = [
        { id: 1, brand: 'Mercedes-Benz' },
        { id: 2, brand: 'Porsche' },
        { id: 3, brand: 'BMW' }
    ];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}

export default Garage;