import { useLayoutEffect } from 'react';
import cover from '../../growingblock2.jpeg';

function GrowingBlock() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <img className="coverPhoto" src={cover} />
            <div className="centeredTitleB">The Growing Block</div>
            <div className="backgroundContainer">
                <div className="backgroundItem">
                    <h3 className="backgroundTitle">Description</h3>
                    <p className="backgroundDescription">
                        The growing block is a theory of time very similar to the moving spotlight. It similarly uses the block model to view spacetime. However, where the block theory and moving spotlight theory encapsulate the past, present, and future, the growing block only accounts for the past and present. As such, according to the growing block, the past and present exist, but the future does not. This view also includes a special, privileged absolute present and accounts for the passage of time. As the absolute present flows with the passage of time, the block continues to grow as more things, people, events, and states of affair are accumulated in the past, hence the name the growing block.
                    </p>
                    <p className="backgroundDescription">
                        Below is an argument against the growing block theory. At the end of the argument is my evaluation of whether the argument is sound or not, which provides an analysis to determine whether the argument, and consequently the theory, is strong or not. Note that Putnam's argument listed below does not directly argue against the growing block but rather a key feature of the theory. That is, the argument contends the inexistence of the future, which is one of the sole features that distinguishes the growing block from the block theory. Thus, if the argument is taken as sound, then it would follow that the growing block is false, for future things exist when the growing block claims they do not.
                    </p>
                </div>
            </div>

            <div className="backgroundItem">
                <h3 className="backgroundTitle">Putnam's on Time and Special Relativity</h3>
                <div className="premiseContainer">
                    <p className="premise">
                        <b>Premise 1:</b> If special relativity is true, then it is possible for future things to be real.
                    </p>
                    <p className="premise">
                        <b>Premise 2:</b> The theory of special relativity is true.
                    </p>
                    <p className="premise">
                        <b>Conclusion:</b> Therefore, it is possible for future things to be real.
                    </p>

                    <br></br>

                    <p className="premise">
                        <b>Justification for Premise 1:</b> Premise 1 holds that if special relativity is true, then it is possible for future things to be real. This is because according to special relativity, simultaneity is relative. Different observers will have different things to say concerning whether or not two events are simultaneous. Consider two observers, O1 and O2. If O1 is at rest––or moving at constant velocity––and O2 is moving relative to O1 at an extremely high velocity, heading towards O1, then O2’s hyperplane of simultaneity would align with O1’s future. This is similar to the Earth and Vulcan situation described under the background information page. In the same sense as Vulcan, O2’s hyperplanes are shifted so that its hyperplane of simultaneity tilts, meaning the present for O2 is the future for O1. Thus, it follows that if special relativity is true, then it is possible for future things to be real.
                    </p>
                    <p className="premise">
                        <b>Justification for Premise 2:</b> Premise 2 holds that the theory of special relativity is true. This is justified through the strength of the theory itself, which is backed by science and empirical evidence. Since the theory was brought to light and continuing to the present, the theory of special relativity has passed every test, and every prediction the theory offers has been correct. There exists an abundance of empirical evidence supporting special relativity, and thus, as the leading theory of spacetime, special relativity is understood to be true.
                    </p>

                    <br></br>

                    <p className="premise">
                        <b>Evaluation:</b> I argue that Putnam’s argument is sound. This is because special relativity holds strong as a theory and is, to date, the best theory we have. As described in the justification for premise 2, special relativity has been accurate and has aligned with our understanding of time and physics. Additionally, premise 1 illustrates that future things can be real. This is further strengthened by special relativity’s claim that there are no privileged observers. Thus, O1 must recognize the equal authority of O2, and since O2’s present aligns with O1’s future, O2 considers this to be real. Therefore, it follows that O1’s future is real, and we conclude that it is possible for future things to be real.
                    </p>
                </div>
            </div>

            <div className="backgroundItem">
                <h3 className="backgroundTitle">Unmotivated as a Theory of Time</h3>
                <div className="premiseContainer">
                    <p className="premise">
                        In addition to Putnam’s argument illustrating the falsity of the growing block through its incompatibility with the special theory of relativity, the growing block is also unmotivated. This is because there are two significant features unique to the block theory that act as the growing block’s motivating factors: 1) Its ability to capture the asymmetry between past and future, and 2) the existence of a special, privileged absolute present that accounts for temporal experience. However, as demonstrated in my evaluation of the argument from the open future, the open future is compatible with the block theory. This renders the first motivating factor ineffective. Additionally, my evaluation of the detector argument under the moving spotlight similarly nullifies the second motivating factor, for I illustrate that no human can detect the passage of time. Thus, the inclusion of an absolute present to account for the passage of time is also unmotivated. Moreover, similar to the case of the moving spotlight, the block theory accounts for all other ideas and phenomena, so if these sole features of the growing block are rendered ineffective, then the growing block is unmotivated as a theory.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GrowingBlock;