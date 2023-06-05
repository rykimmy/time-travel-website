import { useLayoutEffect } from 'react';
import cover from '../../coverphoto.jpeg';

function MovingSpotlight() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <img className="coverPhoto" src={cover} />
            <div className="centeredTitleB">The Moving Spotlight</div>
            <div className="backgroundContainer">
                <div className="backgroundItem">
                    <h3 className="backgroundTitle">Description</h3>
                    <p className="backgroundDescription">
                        The moving spotlight is a theory of time very similar to the block theory. Everything––past, present, and future––exists to the same degree. The only difference the moving spotlight offers from the block theory is the existence of a special privileged now, or an absolute present. This distinguishes between past, present, and future while also accounting for the passage of time whereas nothing new happens in the block theory, for it is static.
                    </p>
                    <p className="backgroundDescription">
                        It is important to highlight that the block theory can capture 99% of ideas, and the only unique feature that the moving spotlight offers is the marker of an absolute present. This derives from the very strong sense among humans that time passes, and this is what attracts many to both the moving spotlight as well as the growing block theories, for these theories account for such a passage of time.
                    </p>
                    <p className="backgroundDescription">
                        Below are some arguments against the moving spotlight theory. At the end of each argument is my evaluation of whether the argument is sound or not, which provides an analysis to determine whether the argument, and consequently the theory, is strong or not. Note that the arguments listed do not directly argue against the moving spotlight but rather the key feature of the theory. That is, the arguments contend the passage of time, which is the sole feature that distinguishes the moving spotlight from the block theory. Thus, if the arguments are taken as sound, then it would follow that the moving spotlight is unmotivated as a theory, for the only difference it offers from the block theory is the absolute now and consequently the passage of time.
                    </p>
                </div>

                <div className="backgroundItem">
                    <h3 className="backgroundTitle">The Rate of Passage Argument</h3>
                    <div className="premiseContainer">
                        <p className="premise">
                            <b>Premise 1:</b> If time passes, then it ought to make sense to ask: “At what rate does time pass?”
                        </p>
                        <p className="premise">
                            <b>Premise 2:</b> It does not make sense to ask “At what rate does time pass?”
                        </p>
                        <p className="premise">
                            <b>Conclusion:</b> Therefore, time does not pass.
                        </p>

                        <br></br>

                        <p className="premise">
                            The passage of time has two different definitions: anemic and robust passage. In this argument, passage of time refers to robust passage, not anemic.
                        </p>
                        <p className="premise">
                            <b>Anemic Passage of Time:</b> Things change over time. Anemic passage equates the passage of time with the proposition that things change.
                        </p>
                        <p className="premise">
                            <b>Robust Passage of Time:</b> The drift or movement of the absolute now.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Justification for Premise 1:</b> Premise 1 holds that if time passes, then it ought to make sense to ask: “At what rate does time pass?” If time passes (robustly), then there exists some real, quantifiable passage or movement of the absolute now. It follows naturally then that such movement would have a rate of passage that could be measured. Thus, it makes sense to ask “At what rate does time pass?”
                        </p>
                        <p className="premise">
                            <b>Justification for Premise 2:</b> Premise 2 holds that it does not make sense to ask “At what rate does time pass?” There are two justifications for this premise. The first and weaker justification is that whenever you have a rate, you always have two quantities which are being compared and measured to each other. For instance, when calculating velocity, the distance traveled is being compared to the time of travel to calculate the rate. In finding the rate of the passage of time, however, the two quantities being measured are the same: one quantity is time, and the other quantity is also time. In mathematical terms, this would result in a change in time divided by change in time, in which we would get the rate as 1. But 1 is not a rate.
                        </p>
                        <p className="premise">
                            The second justification for premise 2 is that time is not being measured by time but rather another time scale is posited, which we can refer to as supertime. Supertime is a second time axis that is used to calculate the rate of passage of regular time. Thus, the absolute now moves over some stretch of supertime, which allows us to measure the rate of passage of regular time.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Evaluation:</b> I argue the argument is unsound by refuting both justifications for premise 2.
                        </p>
                        <p className="premise">
                            Regarding the first justification about 1 not being a rate, we must understand that physical quantities and numbers are two different things. Physical quantities are actual physical properties of physical things: length, mass, volume, velocity, acceleration, etc. On the other hand, numbers are abstract objects. They are used to represent physical quantities, but they themselves are not physical quantities. To understand this correlation between physical quantities and numbers, consider bars of gold with different lengths. There is a relational structure between these bars. One might be double the other’s length. Numbers also have relational structures. 3 is three times the size of 1. A correspondence between numbers and physical quantities is shown here. If the bars of gold are of length <i>x</i>, 2<i>x</i>, 3<i>x</i> then the numbers 1, 2, 3 can be used to model the physical properties. To establish this correspondence between physical quantities and numbers we must add units. However, we must not confuse the physical quantities and the numbers used to represent them. Furthermore, one second per second is a physical quantity and not a number. Thus, there is a confusion in the first justification of premise 2, which holds that 1 second per second = 1. On the left side of the equation, there is one second per second, which is a physical quantity. On the right side, there is one second divided by one second, resulting in 1, which is a number. Moreover, they are different and should not be confused with one another. Another example would be trading 20 square feet for 10 feet of licorice. In this rate of exchange, you would not cancel the units to get 2 feet. In that same sense, there is a similar confusion occurring in the first justification for premise 2, and it is not properly justified.
                        </p>
                        <p className="premise">
                            Regarding the second justification about positing a second time scale, I again argue it is unjustified. This is because if we introduce a second time scale, supertime, then shouldn’t supertime flow as well? Supertime would pass in the same sense that regular time passes, and we merely shift the question to another scale of time. Then, by the same logic, supertime itself would require another time scale to measure its rate of passage, which would instigate a super-supertime. This time scale too should flow as well. Thus, we find ourselves in an infinite loop of new time scales. Therefore, I conclude that the argument is incoherent.
                        </p>
                    </div>
                </div>

                <div className="backgroundItem">
                    <h3 className="backgroundTitle">The Detector Argument</h3>
                    <div className="premiseContainer">
                        <p className="premise">
                            <b>Premise 1:</b> No physical system can detect the passage of time.
                        </p>
                        <p className="premise">
                            <b>Premise 2:</b> The human mind is a physical system.
                        </p>
                        <p className="premise">
                            <b>Conclusion:</b> Therefore, the human mind cannot detect the passage of time.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Passage of Time:</b> Similar to the rate of passage argument, the passage of time refers to robust passage, not anemic.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Justification for Premise 1:</b> Premise 1 holds that no physical system can detect the (robust) passage of time. This is best justified by considering the A-series and B-series, both of which are series of events. Remember that in the B-series, events are marked in relation to each other whereas in the A-series, there exists a time marker, the absolute now, which is how the timing of events are related. Although the A-series and B-series are different in this regard, they agree on the nature of events; that is, they both maintain the same events, and an event would only exist in the A-series if it did in the B-series, and vice versa. Now consider a physical system that has a light built into it, which illuminates if it detects the (robust) passage of time. The event of the light illuminating in our time detecting system, if existent in the A-series, would then also have to exist in the B-series, for they share the same events. But the B-series has no absolute now, no marker of time that can be detected by the physical system. Thus, the question of whether or not time passes has no bearing on whether the light would illuminate, and it is concluded that no physical system could detect the (robust) passage of time.
                        </p>
                        <p className="premise">
                            Another way to justify premise 1 is by understanding that the (robust) passage of time, the movement of the now, is not a physical event. There are no forces at play, no entities involved, and thus, since it is not a physical event, it cannot be detected.
                        </p>
                        <p className="premise">
                            <b>Justification for Premise 2:</b> Premise 2 holds that the human mind is a physical system. This follows naturally from biology and cognitive science, which understands the brain to be a physical system, for it works through neurons and synapses, physical components of the larger system.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Evaluation:</b> I argue the detector argument is sound despite the theory-dependent objection to the argument.
                        </p>
                        <p className="premise">
                            Some object to premise 1, claiming that observation is theory-dependent: While the light may illuminate in both the A-series and the B-series, their respective explanations behind the illumination will call on different theories that align with either the A-series or the B-series. For instance, the A-theorist could say that the physical system illuminates in the A-series because there is a time marker that can be detected whereas the B-theorist would need its own theory for the light illuminating.
                        </p>
                        <p className="premise">
                            Similar to Prosser, I do not find this objection appealing. It seems to miss the mark of the justification for premise 1. Both the A-series and B-series share the same fundamental laws of physics, which supports the equivalence of events in both series. Thus, if the light shines in the A-series, it must also shine in the B-series, for they share the same physical events. The point is exactly that: Despite the A-series maintaining a time marker to be detected and the B-series not exhibiting this property, the event of the light illuminating would be the same. In other words, if the existence of a time marker to be detected makes no difference to whether the light illuminates––which detects the movement of this time marker––then the physical system cannot detect the passage of time.
                        </p>
                        <p className="premise">
                            Here is another way to understand this, for I myself grappled with this idea numerous times: In the case that the light does not illuminate, well, then no physical system can detect the passage of time. In the case that the light does illuminate, it would illuminate in both the A-series and the B-series. For the A-theorist, this is amazing. A physical system is detecting the passage of time. But it is also illuminating in the B-series, and unlike the A-series, the B-series exhibits no marker of time to be detected. Yet the light is still somehow illuminating. Thus, the question is raised, how can a physical system detect something that does not exist? The answer is simple: It cannot. Thus, it follows that the physical system is not really detecting the passage of time, for how can it detect something that does not exist (in the B-series)? Furthermore, we reach the conclusion that there can be no physical system that detects the passage of time.
                        </p>
                        <p className="premise">
                            Therefore, I conclude that this objection to the detector argument is unjustified and that the detector argument is sound.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovingSpotlight;