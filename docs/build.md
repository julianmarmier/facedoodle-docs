---
sidebar_position: 5
---

# Building the Plotter

## Presentation
This section presents how the plotter was designed and then built. This includes in the beginning the considerations of different designs and the reasons behind our choices. 
Furthermore we will include all the complications we faced and the solutions we found, in order to give the truest possible account. 
We hope that if you wish to build a 2D plotter you will find here valuable resources to make your wish come true !
Don't hesitate to contact us if you have any questions ! 

##### First Draft:

![](https://hackmd.io/_uploads/SkQN_WPUn.png)


##### Final plotter:

![](https://hackmd.io/_uploads/HJoddbv82.jpg)


## Designing the plotter 

### Which axis system and position?

At the very beginning, we were hesitating on which system to choose between a vertical plotter and different systems of horizontal plotter.
We decided to build a **pulley system**, where the two axes are directly connected with just one belt. To move in a cartesian plane we use the different rotations of the stepper motors.
*See next schema* 

![](https://hackmd.io/_uploads/ryTa6gFIh.png)



The system is not really intuitive, here is an explicative sketch of how the two axis can move in a 2D plane: 

![](https://hackmd.io/_uploads/rJMo_ec8h.jpg)

:::note
M1 and M2 are the stepper motors. They turn clockwise or counter-clockwise, the direction is indicated by the arrow on the cercle. 
*Example* : To go in an upward direction, the stepper motor labeled M1 and M2 should turn clockwise.
:::

**And the position ?**
The position is the angle we want to give to the plotter's base. After considerating of building it completely vertical or completely horizontal, we decided to build it **inclined** with an angle α°.
And we chose α = 30°.

## The plotter and the 3D Pieces
:::note
For the material you need, see the [Parts required](/docs/parts) section.
You can find all the 3D parts on our [public repository](https://gitlab.epfl.ch/facedoodle/parts).
For this project, we have several pieces we had to design on [Fusion360](https://www.autodesk.fr/products/fusion-360/overview?term=1-YEAR&tab=subscription). 
Here is a list of all components useful and needed in order to make the same plotter as us !
:::

### 1. Pully system piece
Here is an image of a 3D visualisation for the mecanism of the plotter.
![](https://hackmd.io/_uploads/Skq_gGvI3.png)

- **The** (*yellow*) **platform** that you see allows the mecanism to move on a cartesian plane: we designed 2 identicals simple platforms (*see Github*), where at the 4 extremities there are holes for the delrin wheels, and the 4 inside holes are for the excentric spacers. *See image below*.

    ![](https://hackmd.io/_uploads/B10GMQP82.png)


> - Between the 2 platforms, we added **washers** to the eccentric spacers to increase the distance 
> - We fixed the **delrin wheels** with **screws** and washers (in order for them to be at the right distance from the platform to roll into the bars)


### 2. Aluminium V-Slot fixation pieces
The stepper motors and the aluminium V-slot has to be connected and we needed something that would hold both parts together. Here is a visualization of how it looks and how it will be placed:

![block](https://hackmd.io/_uploads/B1ws-tLL3.png)


It is also important to thread 2 holes on each end of the Aluminium V-slot to be able to fix it to the printed 3D pieces. You only need to do this on one bar, on the longest one !
*See the illustration below:*
![](https://hackmd.io/_uploads/BJJLI_8L2.png)

We then screwed the stepper motor and the Aluminium V-slot bars to the 3D part above.

### 3. Bar machining

For the size for the **bars**, we chose to cut them the following way: 450mm for the vertical one (the fixed one), and 350mm for the horizontal one, where the pen is attached.

Then we machined the bars so the delrin wheels could roll inside (it was not possible originally because bars and wheel openings were not matching)
:::note
Be careful to buy Aluminium V-Slot bars that are matching with your Delrin wheels, so you will not need to machine them. There are a lot of different manufacturers and standards.
:::

### 4. Pully fixation to bar piece
We needed a piece that would hold the pully under the V-slot so the belt can move the upper bar. The piece can slide into the extrusion profile and then with a screw, hang the pully underneath that piece. The pully should rotate without any friction. 
*See below to see the final result of the piece:*
![](https://hackmd.io/_uploads/BJu1FBDLn.png)


### 5. Belt fixation piece

 This piece was required to fix the belt to the aluminium bar. The system with the 4 screws allows to adjust the belt and it is very stable.
    
Slide it into the extrusion profile, and tighten the belt once it's well placed inside.

![](https://hackmd.io/_uploads/BJok0XwUh.jpg)


### 6. Pen holder and servo motor holder pieces
This part contains actually 5 different little pieces. Two for the servo motor and three for the pen. The pen holder is inpired by the AxiDraw MiniKit and it can hold the pen straight or inclined. 
The idea is that the servo motor moves the pen holder piece up and down that slides along the vertical axis in the help of the two metallic bar (3mm and 80mm long) that constrains any other movements.

![](https://hackmd.io/_uploads/HyrrPmPLn.jpg)


### 7. Laser holder pieces
There are 3 main parts that will be useful to build the laser. It consists of two supports for the two servo motors that are used for the laser and the last piece is holding the laser. It is important to note that the wooden support is perpendicular to the inclined plane and not to the horizontal plane to reduce the inaccuracies caused by more complex calculations.

![](https://hackmd.io/_uploads/rJiGvQPU3.jpg)

The following video demonstrates the laser calibration, where it performs a few demonstrations in this order: a diagonal line, a vertical line, a horizontal line and a circle.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/866K7BhQyrk" title="Laser Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### 8. iPad support pieces
For the last 3D printed pieces, they are the pieces to mount the iPad on top of the 2D plotter. It simply consists of a sort of an iPad "case" and two "legs" that you need to glue together so the case can hang on to the inclined plank of wood.

![](https://hackmd.io/_uploads/SkPZ3uLIh.png)
      

## Assembling all the parts

To assemble it, here are some steps to follow:

- Fix the 2D plotter on a horizontal base. You can then build a support to incline it. 
(*We built ours inclined with an 30° angle, using laser-cut wood pieces for the foundation.*)
- You will need to drill holes to pass the plotter and laser cables through the board as well as to fix the plotter to the board.  The image below displays a view of our plank before fixing the plotter and the laser.
- **Tip before drilling!** First place the plotter on the board and mark the holes to drill with a pencil before starting.

![](https://hackmd.io/_uploads/BykgOAt8n.png)

- As you noticed, we changed the location of the Electronic device from the design to the final version. Fix the iPad support to the basis of the plotter (iPad or other device should be **completely vertical**). The iPad support that we provide on our [parts repository](https://gitlab.epfl.ch/facedoodle/parts) is adapted for 30°, but you can modify the files to change the inclination.

- Fix the support of the laser and the laser on top of it.
- Check out the [Hardware Setup](/docs/electronics) section for how to wire everything.

*Below the 2D plotter still in construction phase :*

![](https://hackmd.io/_uploads/HJzg4BwL2.jpg)



## You said problem ?

Here is a recap of some complications we faced while building the plotter.
Believe me: there were a lot and that really slowed us down! (Federico can testify ;))
### We say solutions !

- **Before starting: are we going to build a vertical plotter ? A horizontal one ? We’re lost !**

Completely *horizontal* ? easier to build but the movement of the head and so the drawing will be less precise! In a *vertical* position ? the software (with the camera) being in front of the user will be more precise but the writing will be less precise and slower! 
The *final choice*: inclined (fixed to a wooden board) to combine all the best options !

- **Oups: the delrin wheels don’t fit with the Aluminum V-Slot bars...**

Don't panic ! (we did panic) but we managed to fix the bars thanks to the SPOT workshop to machine the bars: hence it resolved the problem that the bars and the wheels were incompatible (we did think about a design with a metallical bar etc. less practical!)

- **Adaptation with the washers**

We used a lot of washers for the pulley system to adjust precisely the heights of the components: we strongly advise you to use wahsers !

- **Too hot to handle**

Make sure that you let through the right amount of current to the stepper motors so they don't heat up too fast.

- **Laser accuracy**

The laser was very temperamental. At first, it was just a matter of performing a coordinate transformation from (x,y) to (α,β) but we quickly realized that a small inaccuracy could cause a significant shift. Two solutions appeared to us: either make a software adaptation consisting of an interpolation of the coordinates entered in order to cancel the deviation as much as possible, or change certain parts (like changing the axis of the wooden support) in order to gain in rigidity and simplify the calculations to limit the propagation of uncertainty. It was the second solution that was chosen and it paid off.







