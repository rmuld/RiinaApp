import express, { Request, Response, Express } from "express";
import usersController from './api/controllers/usersController';
import addressesController from './api/controllers/addressesController';
import waterMetersController from './api/controllers/waterMetersController';

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());



app.get("/api/v1/health", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Hello Riina App!"
    });
});

// API endpoints
// USERS API
app.get("/api/v1/users", usersController.getAllUsers);
app.get("api/v1/users/:id", usersController.getUserById);
app.post("api/v1/users", usersController.createNewUser);
app.put("api/v1/users/:id", usersController.updateUser);
app.delete("/api/v1/addresses/:id", usersController.deleteUserById);

// ADDRESSES API
app.get("api/v1/addresses", addressesController.getAllAddresses);
app.get("api/v1/addresses/:id", addressesController.getAddressById);
app.post("api/v1/addresses", addressesController.createNewAddress);
app.put("api/v1/addresses/:id", addressesController.updateAddress);
app.delete("api/v1/addresses/:id", addressesController.deleteAddressById)

//WATERMETERS API
app.get("api/v1/water-meters", waterMetersController.getAllWaterMeters);
app.get("api/v1/water-meters/:id", waterMetersController.getWaterMeterById);
app.post("api/v1/water-meters", waterMetersController.createNewWaterMeter);
app.put("api/v1/water-meters/:id", waterMetersController.updateWaterMeter);
app.delete("api/v1/water-meters/:id", waterMetersController.deleteWaterMeterById);


app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App is running on port ${PORT}`);
});