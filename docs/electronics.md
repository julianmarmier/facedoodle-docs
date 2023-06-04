---
toc_min_heading_level: 2
toc_max_heading_level: 2
sidebar_position: 4
---

# Setting up the Hardware & Electronics


## Controlling the Plotter 

The control of the plotter from the iPad is done in **two steps**:

1. The iPad connects connects to the ESP32-CAM via bluetooth low energy (BLE).
2. The ESP32-CAM sends a command to the Arduino Uno via serial.
3. The Arduino Uno controls the stepper motors and servos which allow a drawing to be displayed.

![](https://hackmd.io/_uploads/BJyiK4D82.png)

An important thing to note is the coordinate transformation from the iPad to the plotter. The motors are setup such that regular CNC commands are rotated by 45 degrees compared to the actual commands. See the drawing below (source: IEEE Spectrum).

![](https://spectrum.ieee.org/media-library/illustration-of-the-belt-motors-of-the-minikit.jpg?id=25592291&width=1580&quality=80)

As such the ESP32-CAM computes the rotation of the iPad's coordinates on the fly to accurately plot correct coordinates.

The following video explains how the wiring is done.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/JmbGPZT9-pE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Controlling the hardware

### Flashing the ESP32-CAM
This is laborous work as the ESP32-CAM has neither a builtin programmer nor a USB port. 

You will need to either get an FTDI or an [ESP32-CAM programmer](https://bitluni.net/camprog) (the latter will save you lots of time) to flash code the the ESP32-CAM. Note that to put the ESP32-CAM into flashing mode you will need to place a jumper wire connecting the IO0 and GND pins should you choose to use the FTDI.

You also need to install the ESP32 library from the Arduino IDE. Instructions [here](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/).

### Controlling the stepper motors

We use a CNC shield placed on an Arduino Uno to control the stepper motors.

To set up the motor drivers, the driver's current limiter must be adjusted to match that required by the NEMA 17 stepper motors. This can be done by following a tutorial such as [this one](https://www.youtube.com/watch?v=VyHhRsN7Wr0).

Wire the stepper motors as such:


![](https://hackmd.io/_uploads/ByA9CcuL2.png)

Note that the stepper motor drivers are placed with the screws towards the center of the board. The stepper motors normally come with cables that allow you to connect them directly to the CNC Shield without too much of a hassle.

Then to make sure the plotter will work with the iPad, you need to make sure the X and Y axes point in the correct direction. 
- If you haven't done so already, [build the plotter](/docs/build)!
- [Follow this guide](https://github.com/gnea/grbl/wiki/Flashing-Grbl-to-an-Arduino) to flash the Arduino Uno with GRBL, the firmware needed to control the stepper motors.
- Download and install the [Universal Gcode Sender](https://winder.github.io/ugs_website/download/).
- Open the Universal Gcode sender and run the setup wizard (under **Machine > Setup Wizard**).
    - Set the X and Y feed rate to **300 steps/mm**.
    - Press the **X+/-** and **Y+/-** buttons to observe the behavior of the stepper motors. The directions should match the following sketch:
    ![](https://hackmd.io/_uploads/Sk8OjJYLn.png)


### Controlling the pen servo

The ESP32-CAM controls the pen servo by setting it to either UP (180°) or DOWN (10°). The servo is controlled by PWM through the ESP's IO15 pin.

### Controlling the laser

The laser uses a pan-and-tilt mechanism with two servos. See the [plotter build section](/docs/build) for how the pieces work. The servos should be connected to the IO14 and IO2 pins, each one controlling a separate axis (alpha and beta).

To power the Uno, we used a 9V battery pack. The power can be supplied to the board by either soldering the battery's wires to the Vin and GND ports on the prototyping board, or by soldering them to a male power jack and connecting that to the Arduino's female power jack.

## Final circuit design

The final circuit should consist in a "sandwich" with the Arduino at the bottom, the prototyping shield in the middle, and the CNC shield on top.

![](https://hackmd.io/_uploads/HJ4BwsdL2.jpg)
![](https://hackmd.io/_uploads/S1DBwj_I2.jpg)



### Servos and laser powering

We used an external breadboard connected to the 5V and GND pins of the top CNC shield to power the laser and servos. The laser should be wired in parallel to the servos (which are chained in series).

![](https://hackmd.io/_uploads/B1dWSouI3.png)


### Prototyping shield circuit

To wire the ESP32-CAM, we soldered two 8-pin female headers to the prototyping shield, and then soldered the 5V, GND, U0T pins from the ESP32 to the Uno's pins. We also soldered wires to the IO15, IO14 and IO2 pins to control the servos via PWM. The ESP32-CAM then can be placed on top of the headers in a snug position.

![](https://hackmd.io/_uploads/Sk3mZiuUh.png)

