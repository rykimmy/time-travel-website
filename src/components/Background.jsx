import { useLayoutEffect } from 'react';
import cover from '../../tthome.jpeg';
import nst from '../../nst.jpg';
import worldline from '../../worldline.jpg';
import bevel from '../../bevel.jpg';
import photon from '../../photon.jpg';
import vulcan from '../../vulcan.jpg';
import lightcone from '../../lightcone.jpg';
import lightconethread from '../../lightcone-thread.jpg';

function Background() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <img className="coverPhoto" src={cover} />
            <div className="centeredTitleB">Background Information</div>
            <div className="backgroundContainer">
                <div className="backgroundItem">
                    <h3 className="backgroundTitle">Newtonian Spacetime</h3>
                    <p className="backgroundDescription">Let us begin with Newtonian spacetime. This essentially is one way––Newton’s way––of viewing space and time. You have likely heard of Newton’s laws of motion, which tell us how things move, but what does it mean for something to move? Newton analyzes this question and provides a way of perceiving space and time. Let us begin with motion, and specifically, relativism about motion.</p>
                    <p className="backgroundDescription">Relativism about motion holds that all motion is the relative motion of bodies: X moves if and only if there exists a reference material body such that the distance between X and Y changes over time. Newton rejects this in favor of absolutism of motion, which holds that true motion is motion relative to space itself, not relative to other bodies. This perspective requires a thesis, leading to the absolutism about space and time: space and time exist independent of whatever material bodies happen to exist. In other words, if nothing were to exist, no planets, stars, or humans, then space and time would remain existent. This is contrary to relativism about space and time, which claims that things are spatially related to each other. When you delete everything, space and time no longer exist since they are the web of connections (relations) between objects and events.</p>
                    <p className="backgroundDescription">Newton believes in the absolutism of space and time because of the bucket argument: Fill a bucket of water and hang it by a string. Wound up the string by rotating the bucket, and then let it go. Initially, the bucket spins but the water does not, showing that relative motion exists but true circular motion does not. Later, the bucket and water rotate in lock-step with one another, showcasing relative motion does not exist but true circular motion does exist. Finally, the bucket is stopped, but the water continues to spin, demonstrating both relative motion and true circular motion exist. Furthermore, his argument follows that you can have true circular motion with or without relative motion, so true circular motion cannot be analyzed in relation to relative motion. With no alternatives, Newton turns to absolute space.</p>
                    <p className="backgroundDescription">There is more to read about the development of Newtonian Spacetime including additional arguments behind Newton’s belief in absolutism of space and time as well as arguments against his beliefs, namely that of Leibniz. For the sake of brevity, however, this will not be discussed here. Instead, we move into a description of Newtonian spacetime, which involves Newtonian mechanics with spacetime.</p>
                    <img className="backgroundPhoto" src={nst} />
                    <p className="backgroundDescription">To visualize Newtonian spacetime, consider a three dimensional cube. This block captures both space and time and is called spacetime. Now consider a slice of that block, cut horizontally. That two dimensional square is space. Although space in reality is three dimensional, this visualization uses only two dimensions to illustrate space since it is impossible to draw four dimensions. The third dimension is time, which stretches vertically. Thus, you can imagine a stack of two dimensional slices, or squares, where each slice represents space at a particular time. Using basic geometry, we can use x and y to represent space and t to represent time. So, at t=0, I may be located at x=3 and y=5. If I were to go on a run, moving in the same direction the entire time, at t=3 I may be at x=3 and y=8. This should help you visualize spacetime.</p>
                    <img className="backgroundPhoto" src={worldline} />
                    <p className="backgroundDescription">Motion in Newtonian spacetime is captured by wordlines, that is, a line representing an object through spacetime. To envision this, consider again me at t=0 existing spatially at x=3 and y=8. To illustrate my existence at this point in spacetime, there would be a point drawn exactly at t=0, x=3, y=8. Now consider this point––being me––as time progresses. I will carry on with my life, and as I move and time progresses, this point continues to match my spatial location. What results, then, is a series of consecutive points, or a line. This is my worldline. Every physical object has their own worldline, showcasing their existence through space and time.</p>
                    <p className="backgroundDescription">An event, then, is a point from the worldline. Consider at t=5, I snap my fingers at location x=1 and y=1. That point would represent the event of my snapping my fingers.</p>
                    <p className="backgroundDescription">Now remember the two dimensional slices that make up the block. Each one of these slices is called a hyperplane of simultaneity as it captures a snapshot of spacetime at a particular time. If we were to look at the hyperplane at t=5 when I snap my fingers, all other points on this hyperplane would showcase events that happened simultaneously to me snapping my fingers.</p>
                    <p className="backgroundDescription">To help ensure your understanding of these ideas, consider the block again and a straight vertical worldline within the block. What does this mean? It means the person or object this worldline represents has remained at rest for the entirety that the worldline is vertically straight, for if the object were to have moved, then it would have a different x and y location, meaning the worldline would not remain straight. Now consider a straight line that is not vertical but tilted to a certain degree. What does this mean? It means the object represented by the worldline is moving at constant velocity. The x and y coordinates––their spatial location––is changing at a fixed rate, and we know from basic algebra that this means constant velocity. Now consider a curved line. What does this mean? Drawing again from basic algebra, this curved line illustrates acceleration of the object as time passes.</p>
                    <p className="backgroundDescription">These are the basics to understanding Newtonian spacetime and also the theories of time. As you continue reading through the website, you will find these terms used over and over again. Now let us look at Galilean spacetime.</p>
                </div>
                <div className="backgroundItem">
                    <h3 className="backgroundTitle">Galilean Spacetime</h3>
                    <p className="backgroundDescription">Under Newtonian spacetime, being at absolute rest exists and is possible. But it is impossible for anything to be at absolute rest in the universe, for everything is always moving. This is the central point of Galilean spacetime: being at rest is the same as moving inertially, or at constant speed. There is no observable, measurable, physical difference between being at rest and moving inertially (moving at constant speed).</p>
                    <p className="backgroundDescription">Furthermore, this entails a unique geometric interpretation to Newtonian spacetime. Galilean spacetime introduces the ability to bevel the deck however you like subject to the constraint that straight lines are kept straight. In other words, you cannot bevel in any way that would turn a straight worldline into a curved worldline as this would turn constant velocity into acceleration.</p>
                    <img className="backgroundPhoto" src={bevel} />
                    <p className="backgroundDescription">But what does it mean to bevel the deck? To demonstrate this, imagine a person floating in space and another flying at constant speed. To both, they seem as if they were at rest while the other came flying out of nowhere. Both are true. The above image depicts such a situation, and the two depictions are the same. If we take A’s perspective, then we would illustrate this through the left visualization where A seems to be at rest––shown through the straight worldline––and B is moving at constant velocity according to A. If we were to take B’s perspective, then we would use the swapped visualization on the right in which B is at rest and A is moving at constant velocity.</p>
                    <p className="backgroundDescription">Bevelling the deck will change the curvature of worldlines, and it will generate new velocities––as seen through A and B––but it will not change acceleration. Acceleration is an absolute quantity under Galilean spacetime, and similarly, simultaneity is absolute as well. That is, there is a fact of the matter whether things happen at the same time. The hyperplane of simultaneity determines and showcases which events happened at the same time.</p>
                    <p className="backgroundDescription">Galilean spacetime is perfect, except for one thing: light. Light is weird and strange. It has a fixed velocity. Shooting a photon and then measuring the photon while at rest produces the speed of light. However, shooting a photon and then measuring the photon while running towards it still produces the same speed even though it should in theory be slower given the observer is moving towards the photon. This phenomenon highlighted an issue with Galilean spacetime, calling for a new theory on spacetime: Einstein’s special theory of relativity.</p>
                </div>
                <div className="backgroundItem">
                    <h3 className="backgroundTitle">Minkowski Spacetime</h3>
                    <p className="backgroundDescription">Einstein saw the problems with Galilean spacetime and started with a blank slate to develop a new theory. He began with simultaneity and considered a peculiar situation. Consider person A who is at rest and shoots a photon 45 degrees NE to his starting point <i>s</i>. The photon travels some distance and then is bounced against a point <i>p</i>, at which point it returns back to the worldline of A. The photon draws two equal sides to a triangle where the third leg is the worldline of person A. The midpoint between sending and receiving the photon, call it point <i>q</i>, is simultaneous with point <i>p</i> since we know light travels at constant speed. Now, add a different observer, person B, traveling at some constant speed at an angle to the right of person A (B considers himself to be at rest just as A does). Their starting points of sending the photon are the same. B receives the photon after it bounces against <i>p</i>, at the mid-point between <i>r</i> and <i>p</i>, <i>r</i> being the return time for person A. We can call this midpoint between <i>r</i> and <i>p</i>, <i>r*</i>. Then, for B, the point simultaneous to the photon’s bouncing at point <i>p</i> is different from person A’s simultaneous point––A's hyperplane of simultaneity. Thus, Einstein unveils the relativity of simultaneity where in both Newtonian and Galilean spacetime, simultaneity was thought to be absolute.</p>
                    <p className="backgroundDescription">The photo below demonstrates this phenomenon. On the left is the described situation where you can see the two different hyperplanes of simultaneity for A and B respectively. The left image shows the situation from the perspective of person A, as A is at rest. On the right is the same situation but in B's perspective. Here, B is at rest and A is moving at constant velocity. Again, you can see the difference in hyperplanes of simultaneity.</p>
                    <img className="backgroundPhoto" src={photon} />
                    <p className="backgroundDescription">Moreover, the relativity of simultaneity holds that different observers will have different things to say concerning whether or not two events are simultaneous. As such, there is no single, unique present. What we have instead is a plurality of nows.</p>
                    <p className="backgroundDescription">To better demonstrate this, consider two planets, Earth and Vulcan. If they have parallel worldlines, meaning both are moving at rest or at the same constant speed in the same direction, then they share the same hyperplane of simultaneity. However, if Vulcan is moving away from us, then its hyperplanes are shifted so that its hyperplane of simultaneity tilts in a manner that Vulcan’s present is the past for us on Earth. If Vulcan is moving towards us, then its hyperplanes are shifted so that its hyperplane of simultaneity tilts in a manner that Vulcan’s present is the future for us on Earth. This is shown in the image below.</p>
                    <img className="backgroundPhoto" src={vulcan} />
                    <p className="backgroundDescription">This demonstrates Einstein’s special theory of relativity, but his theory was initially all in algebra. Minkowski contributed by providing a geometrical view, hence the name Minkowski spacetime.</p>
                    <p className="backgroundDescription">Whereas in Galilean spacetime, the main organizational tool was the hyperplane, in Minkowski spacetime, the main organizational tool is the lightcone. At any point <i>p</i>, there is a lightcone––two cones protruding outwards from point <i>p</i>, at the top and bottom––where all areas of the cone protrude at a 45 degree angle. All light emanating from point <i>p</i> is confined within this 45 degree angle, and light projecting outwards from the upper cone represents the direction of the future where all light coming in from the bottom of the cone represents the past.</p>
                    <img className="backgroundPhoto" src={lightcone} />
                    <p className="backgroundDescription">In order to understand lightcones better, consider a two dimensional lightcone, again with <i>p</i> at the center of the lightcone. Now consider any point <i>q</i> on the line of the lightcone. Here, <i>p</i> and <i>q</i> are lightlike related, and only a photon can connect <i>p</i> and <i>q</i>. This is because <i>q</i> is a point of spacetime, and nothing can move as fast as the speed of light, meaning only a photon can connect the two points. Now consider a point <i>r</i> beyond the scope of the cone. Here, <i>p</i> and <i>r</i> are spacelike related, meaning it is physically impossible for an event a <i>p</i> to have an effect at <i>r</i>. This is because information from <i>p</i> would have to travel faster than the speed of light to reach <i>r</i>, which is impossible. Finally, consider a point <i>s</i> within the upper cone of <i>p</i>. Here, <i>p</i> and <i>s</i> are timelike related, and it is physically possible for an event at <i>p</i> to have an effect at <i>s</i>. This is because every physical process in the universe happens inside the lightcone, and all points <i>s</i> capture this.</p>
                    <p className="backgroundDescription">Now that we have described lightcones, we put them together to showcase how they work in Minkowski spacetime. Worldlines thread lightcones. At every point in a worldline, there exists a lightcone where the line threads through its center point. As described by spacelike relations, the worldline can only proceed at certain angles––constrained to 45 degrees. When worldlines weave through lightcones, the worldline’s hyperplanes tilt towards the worldline, showcasing that worldline’s hyperplane of simultaneity. As one speeds up, the angle between their worldline and lightcone shrinks, and their hyperplane of simultaneity is tilted further and further. As one approaches the speed of light, space and time fold into each other, and time begins to stop.</p>
                    <img className="backgroundPhoto" src={lightconethread} />
                    <p className="backgroundDescription">This leads us to the intriguing phenomenon of time dilation. Consider an observer A and two points along his worldline, marking his 10th and 20th birthdays. The time interval between these two points is 10 years. Consider another observer, person B, moving relative to A at 50% the speed of light. For person B, only 8.66 years has passed during A’s 10 year interval because B is traveling at 50% the speed of light, meaning B is traveling 0.5 light years for every year. Using this information, one can utilize the Minkowski Spacetime Interval to calculate the time elapsed for person B in this type of scenario, which gives the number 8.66 years. Essentially, time dilation is the difference in elapsed time due to relative velocities, and it is a feature of Einstein's special theory of relativity.</p>
                    <p className="backgroundDescription">This wraps up the general background information necessary to understand the philosophy of time and namely, the four main theories of time as well as time travel. Continue reading other pages to learn more!</p>
                </div>
            </div>
        </div>
    );
};

export default Background;