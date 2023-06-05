import { useLayoutEffect } from 'react';
import cover from '../../block5.jpeg';

function Block() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <img className="coverPhoto" src={cover} />
            <div className="centeredTitleB">The Block Theory</div>
            <div className="backgroundContainer">
                <div className="backgroundItem">
                    <h3 className="backgroundTitle">Description</h3>
                    <p className="backgroundDescription">
                        The block theory is a theory of time that believes everything exists. All things, people, events, and states of affairs from the past, present, and future exist. Both Einstein and you, the person reading this, exist, though without any overlaps. Reality is captured by a block of spacetime, which is extended both in space and time, and the entire history of the universe is within this block, all past, present, and future.
                    </p>
                    <p className="backgroundDescription">
                        Several notable observations contribute to understanding the block theory. First of all, contrary to presentism, which exhibits a privileged present “now,” there is no distinguished present within the block theory. All the times exist and none are privileged over others. Secondly, people––and all physical objects––have extensions both in space and time. They are represented in the block as worldlines, visual streaks that illustrate the spatial and temporal existence of such physical beings. Finally, everything in the block exists and is part of reality. People across the world, people who have passed away, and people who have yet to be born all exist in the same sense and to the same degree as me, the person writing this, and you, the person reading this.
                    </p>
                    <p className="backgroundDescription">
                        Below are some arguments against the block theory. At the end of each argument is my evaluation of whether the argument is sound or not, which provides an analysis to determine whether the argument, and consequently the theory, is strong or not.
                    </p>
                </div>

                <div className="backgroundItem">
                    <h3 className="backgroundTitle">The Argument From Tense</h3>
                    <div className="premiseContainer">
                        <p className="premise">
                            <b>Premise 1:</b> Language is tensed.
                        </p>
                        <p className="premise">
                            <b>Premise 2:</b> If language is tensed, then reality is tensed.
                        </p>
                        <p className="premise">
                            <b>Premise 3:</b> If reality is tensed, then the block theory is false.
                        </p>
                        <p className="premise">
                            <b>Conclusion:</b> The block theory is false.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Justification for Premise 1:</b> Premise 1 holds that language is tensed. It follows naturally from linguistics and all languages that language is tensed. We maintain three tenses for each of the three time zones: past, present, and future. All verbs exhibit these tenses, and thus, language is tensed.
                        </p>
                        <p className="premise">
                            <b>Justification for Premise 2:</b> Premise 2 holds that if language is tensed, then reality is tensed. This is because language is rooted so deeply in reality. If language is tensed, then that must reflect something about the nature of reality. In other words, if the way we speak distinguishes between past, present, and future, then there must exist some actual distinction between these three time zones in reality. Thus, it follows that reality is tensed.
                        </p>
                        <p className="premise">
                            <b>Justification for Premise 3:</b> Premise 3 holds that if reality is tensed, then the block theory is false. According to the block theory, there is no present, no special, privileged now; time is not carved up into the three distinct zones of past, present, and future. Rather, time is time, and all time is the same. However, if reality is tensed, then that means there does exist a past, present, and future. There are indeed three distinct time zones. Thus, we run into a contradiction, and it follows that if reality is tensed, then the block theory must be false.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Evaluation:</b> I argue that the argument from tense is unsound because premise 2 is unjustified. The reason behind this is the Indexical Theory of ‘Now’. According to this theory, the indexical nature of words means certain words have different meanings or implications depending on the speaker. For instance, in the phrase “I am hungry,” “I” is indexical and refers to a different person depending on who says the sentence. Thus, in considering the block theory, Einstein might have said “WWI is happening now,” but WWI is not actually happening now. Instead, WWI was happening at the moment Einstein said the sentence. The sentence is true if and only if uttered at a time when WWI is currently happening. Thus, the word ‘now’ refers to whatever hyperplane is referred to. In this sense, language can be tensed without entailing that reality is tensed because as shown, the block theory––which represents reality––can maintain its lack of distinct time zones, despite language being tensed, through the Indexical Theory of ‘Now’.
                        </p>
                    </div>
                </div>

                <div className="backgroundItem">
                    <h3 className="backgroundTitle">The Argument From the Open Future</h3>
                    <div className="premiseContainer">
                        <p className="premise">
                            <b>Premise 1:</b> The future is open.
                        </p>
                        <p className="premise">
                            <b>Premise 2:</b> If the future is open, then the block theory is false.
                        </p>
                        <p className="premise">
                            <b>Conclusion:</b> Therefore, the block theory is false.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>The Open Future:</b> The open future, or the idea that the future is open, refers to the notion that people have choices and there are many possibilities open to them. Their actions and decisions matter, and they possess some sort of power and agency over their future.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Justification for Premise 1:</b> Premise 1 holds that the future is open. This derives from the natural, integral thought inherent to humans that we would like to preserve. It is natural for the future to seem open. When considering questions like “What school should I attend?” or “What should I eat for dinner?” there exists a sense of openness to these options regarding the future. If, at time t=1, I received admission to both Dartmouth and Harvard, then it would seem that my decision, which we will say occurs at t=2, would impact my life at time t=3; I could be living my best life at t=3by choosing to attend Dartmouth, or I could be living a dismal life at Harvard. In either case, the decision I make at t=2 impacts my future. This is ingrained in the way we think and act, and seems to be a presupposition to thinking and reasoning. Thus, it follows that the future is open.
                        </p>
                        <p className="premise">
                            <b>Justification for Premise 2:</b> Premise 2 holds that if the future is open, then the block theory is false. This is because if the future is open, we maintain the power and agency to influence the future. We can choose to attend Dartmouth over Harvard, which will directly impact where we live for the next four years of our lives. We can choose what to eat for dinner, which will affect where we eat, what we eat, and how full we become. The future is not set, for it depends on the decisions and activities of the present. However, according to the block theory, the future is set. Everything that will happen is already defined. Whether we go to Dartmouth or Harvard is already established, and what we will eat for dinner is already displayed in the block. Our power and agency to influence our future does not exist, for the block has already scripted it all out. Thus, we reach a contradiction between the open future and the block theory, and it follows that if the future is open, then the block theory must be false.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Evaluation:</b> I believe the argument is unsound because of premise 2, which holds that if the future is open, then the block theory is false. I argue that the open future is compatible with the block theory’s implication of a settled future because of the distinction between <i>will</i> and <i>must</i>, which renders premise 2 unjustified.
                        </p>
                        <p className="premise">
                            There are two segments to my argument. The first is the distinction between “X will be the case” and “X must be the case,” which are two different statements. Consider the aforementioned example of deciding between Dartmouth and Harvard. In this case, proponents of the argument from the open future question whether it is even a choice, for the outcome is already set. This perspective demonstrates the line of thinking present in the statement “X must be the case.” They would claim the future is definitive and established, and therefore, power or agency over one’s future does not exist. However, this differs from “X will be the case,” in which power and agency over one’s future is maintained. This leads to the second segment of my argument.
                        </p>
                        <p className="premise">
                            Consider now the same example of choosing between Dartmouth and Harvard, only imagine that decision as a point, where two lines protrude from the point, illustrating the different paths of life depending on whether I choose Dartmouth or Harvard. Now, add all the other decisions one makes in their life. The outcome would be a tree-like structure outlining all the possible decisions and world-lines that one could potentially live. This we call the decision tree. It has many decision points and paths not taken, but there is only one path that is one’s world-line, representing the actual set of events and decisions one took. That line demonstrates the block theory. There are other blocks with other possibilities in which one makes other decisions. However, the block with the path we took (our world-line) is reality, and it contains everything that was, is, and will be.
                        </p>
                        <p className="premise">
                            Thus, despite the future being settled according to the block theory, the open future is compatible with this settled future because of the distinction between “X will be the case” and “X must be the case.” Moreover, it follows that due to said distinction, the open future is compatible with a settled future, and therefore, the future being open does not render the block theory false, for the open future is compatible with the block theory’s implication that the future is settled. Furthermore, I have refuted premise 2, and therefore, I conclude that the argument from the open future is unsound.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;