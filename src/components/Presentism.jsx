import { useLayoutEffect } from 'react';
import cover from '../../presentism2.jpg';

function Presentism() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <img className="coverPhoto" src={cover} />
            <div className="centeredTitleB">Presentism</div>
            <div className="backgroundContainer">
                <div className="backgroundItem">
                    <h3 className="backgroundTitle">Description</h3>
                    <p className="backgroundDescription">
                        Presentism is the theory of time that believes the present is privileged and special compared to other planes of spacetime––the past and the future. According to this view, the past did exist but no longer does; the future will come to exist but does not yet exist. What exists is the present alone, that is, only present things, people, events, and states of affairs exist.
                    </p>
                    <p className="backgroundDescription">
                        To provide some examples, you, the person reading this, exist. Dinosaurs, on the other hand, do not. As a current college student, I have no children, so they do not exist. But they will come to exist. Similarly, my great-grandfather did exist, but he no longer does as he passed away.
                    </p>
                    <p className="backgroundDescription">
                        While the past and future do not exist, facts about them do. For instance, Einstein himself did exist but no longer exists. However, the fact that Einstein created the special theory of relativity exists. The fact that he died in 1955 also exists. Such facts regarding past and future things do exist.
                    </p>
                    <p className="backgroundDescription">
                        Below are some arguments against presentism. At the end of each argument is my evaluation of whether the argument is sound or not, which provides an analysis to determine whether the argument, and consequently the theory, is strong or not.
                    </p>
                </div>

                <div className="backgroundItem">
                    <h3 className="backgroundTitle">The Argument From Cross-Time Relations</h3>
                    <div className="premiseContainer">
                        <p className="premise">
                            <b>Premise 1:</b> If presentism is true, then it is impossible for things at different times to be related.
                        </p>
                        <p className="premise">
                            <b>Premise 2:</b> But it is possible for things at different times to be related.
                        </p>
                        <p className="premise">
                            <b>Conclusion:</b> Therefore, presentism is false.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Justification for Premise 1:</b> Premise 1 holds that if presentism is true, then it is impossible for things at different times to be related. This is because in order for relations to exist, the relata––things being related––must exist. Consider two people, Jack and Jill, and the statement that Jack loves Jill. This relation between Jack and Jill cannot itself exist if either Jack or Jill did not exist. If Jack did not exist, then it is impossible for something non-existent to love Jill. Similarly, if Jill did not exist, then there would be nothing for Jack to love. Therefore, relations require relata to exist. However, as presentism claims, the relata does not exist if the relata is a thing of the past or future. Now, if we consider two things at different times, at least one of them must either be in the past or future (since they are at different times), which means under presentism, at least one of them does not exist. If one of such relata does not exist, then the relation cannot exist. Thus, it follows that if presentism is true, things at different times cannot be related.
                        </p>
                        <p className="premise">
                            <b>Justification for Premise 2:</b> Premise 2 holds that it is possible for things at different times to be related. This can be justified simply through an example. Consider Einstein, a notable figure from the past who, under the presentist view, does not exist, and myself, a currently existing college student. Now consider the relation “Ryan admires Einstein.” It is clear that Einstein and I are things at different times, yet this relation exists and remains true. Additionally, causal relations are cross-time relations that further justify premise 2. Consider throwing a rock, which hits and breaks a window. There is a relation between throwing the rock and the rock breaking the window, and these relata are at different times. Between the moment the rock is thrown and the moment the rock breaks the window, there is some amount of time, regardless of how long or short it takes the rock to travel and break the window. Thus, these events occur at different times, and another cross-time relation is demonstrated, further justifying the premise that it is possible for things at different times to be related.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Evaluation:</b> I believe the argument is sound. Initially, in arguing for the presentist view, it is possible to challenge the justification for premise 2 by taking the stance that it is not things of the past that are the relata within relations but facts or mental images, that exist in the present, that are the relata. Referring to the example of “Ryan admires Einstein,” this counter argument would claim that I do not admire Einstein himself, a thing of the past, but rather admire my own mental image of Einstein that derives from reading his books and learning about his theories. That mental image of Einstein exists in the present as it is part of my mind, meaning the relation is actually between two relata in the present rather than relata at different times. In the case of the causal relation example, while the throwing of the rock and the breaking of the window occur at two different times, the presentist could argue that the relation is not between these two events at different times but instead between the fact that the rock was thrown and the event of the window breaking. In this case, again, the fact that the rock was thrown exists in the present and in the same time as the window breaking, thereby establishing the relata as being at the same time. Thus, premise 2 would become unjustified and the argument unsound.
                        </p>
                        <p className="premise">
                            However, upon further consideration, we can refute this counter argument two ways. The first is a variant of the examples provided in the justification for premise 2. Consider the statement, “I miss my grandfather.” In this case, it is not a mental image or a fact about my grandfather that I miss––which was the argument against the example “Ryan admires Einstein.” Rather, it is my grandfather himself, a person of the past, that I miss. As my grandfather does not currently exist and I do, this example demonstrates that indeed, things at different times can be related.
                        </p>
                        <p className="premise">
                            The second argument against the aforementioned counter argument is the grounding objection, which argues as follows:
                        </p>
                        <p className="premise">
                            <b>Premise 1:</b> All truths are grounded in being.
                        </p>
                        <p className="premise">
                            <b>Premise 2:</b> If presentism is true, then not all truths are grounded in being (namely, truths about the past).
                        </p>
                        <p className="premise">
                            <b>Conclusion:</b> Therefore, presentism is false.
                        </p>
                        <p className="premise">
                            It follows naturally that all truths are grounded in being. That is, the claim “Ryan admires Einstein” is either true or false, based on the grounds of whether I truly admire Einstein or do not. Applied to presentism, we run into the issue of past things not exhibiting any grounds upon which truths can be derived. Consider the statement “The Berlin Wall fell in 1989.” The truth behind this claim needs to be grounded in the event itself, but according to presentism, the event does not exist since it occurred in the past, meaning there are no grounds for the statement. Thus, we run into a contradiction and conclude that presentism is false.
                        </p>
                        <p className="premise">
                            It is possible that presentists might refer back to the original refute that despite events of the past not existing, facts about them exist, so the statement “The Berlin Wall fell in 1989” can be grounded in the presently existing facts about the Berlin Wall. However, this returns us back to the argument that facts about the Berlin Wall that do presently exist need to be grounded in being and existing. As we have gone over, the events to ground these facts do not exist under presentism, for they are in the past, meaning the facts about these events lack the fundamental component necessary to truly be a fact. Hence, the counter argument is refuted.
                        </p>
                        <p className="premise">
                            Furthermore, we have addressed and refuted counter arguments against the justification for premise 2 through the grounding objection and have offered additional examples for the justification of premise 2 which counter arguments to our justification cannot address. Therefore, I conclude that the argument from cross-time relations is sound.
                        </p>
                    </div>
                </div>

                <div className="backgroundItem">
                    <h3 className="backgroundTitle">The Argument From Relativity</h3>
                    <div className="premiseContainer">
                        <p className="premise">
                            <b>Premise 1:</b> If special relativity is true, then there is no absolute present.
                        </p>
                        <p className="premise">
                            <b>Premise 2:</b> If there is no absolute present, then presentism is false.
                        </p>
                        <p className="premise">
                            <b>Premise 3:</b> The theory of special relativity is true.</p>
                        <p className="premise">
                            <b>Conclusion:</b> Therefore, presentism is false.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Justification for Premise 1:</b> Premise 1 holds that if the special theory of relativity is true, then there is no absolute now. This is because the relativity of simultaneity is one of the fundamental concepts derived from special relativity, which holds that everyone has their own hyper-plane of simultaneity. That is, for different observers moving relative to each other at different speeds, each will have their own hyper-plane of simultaneity, or their own now. Thus, rather than a single, absolute present, there are instead a plurality of nows. Furthermore, it follows, then, that if special relativity is true, then there is no absolute present.
                        </p>
                        <p className="premise">
                            <b>Justification for Premise 2:</b> Premise 2 holds that if there is no absolute present, then presentism is false. The justification for premise 2 follows from the definition of presentism. Presentism as a theory of time rests on the central idea that only the present exists. Nothing in the past or future exists, and the present is privileged in this regard. However, presentism banks on there being a single, absolute present; a single hyper-plane of simultaneity that is privileged. Therefore, if there is no such absolute present, no such single hyper-plane of simultaneity, then presentism is false.
                        </p>
                        <p className="premise">
                            <b>Justification for Premise 3:</b> Premise 3 holds that the theory of special relativity is true. This is justified through the strength of the theory itself, which is backed by science and empirical evidence. Since the theory was brought to light and continuing to the present, the theory of special relativity has passed every test, and every prediction the theory offers has been correct. There exists an abundance of empirical evidence supporting special relativity, and thus, as the leading theory of spacetime, special relativity is understood to be true.
                        </p>

                        <br></br>

                        <p className="premise">
                            <b>Evaluation:</b> I argue the argument from relativity is sound despite Markosian’s objection to the argument.
                        </p>
                        <p className="premise">
                            In response to the argument from relativity, Markosian responds with the claim that we have overlooked the philosophical richness of special relativity and therefore must ask whether the theory has enough philosophical baggage to contain or entail the absence of absolute simultaneity, to which there are two outcomes: STR+ and STR–. As Markosian defines it, STR+ is “A physically robust version of STR that has enough philosophical baggage built into it to make it either literally contain or at least entail the proposition that there is no such relation as absolute simultaneity” whereas STR– is “A philosophically austere version of STR that is empirically equivalent to STR+ but that does not have enough philosophical baggage built into it to make it either literally contain or even tail the proposition that there is no such relation as absolute simultaneity” (Markosian, p. 31-32). In other words, both versions of special relativity that Markosian outlines are empirically equivalent, meaning no scientific, empirical, or observable data can distinguish between the two. The difference, however, is that STR– is a version of relativity that does not entail there is no absolute now whereas STR+ does entail there is no absolute now.
                        </p>
                        <p className="premise">
                            Furthermore, Markosian makes the argument that in the argument from relativity, one must distinguish between STR+ and STR–. If it is STR+, then Markosian rejects premise 3 that the theory of special relativity is true because STR+ is false. He reasons this by highlighting the empirical equivalence of STR+ and STR– and claiming that there is <i>a priori</i> evidence supporting STR– over STR+. That is, he seems to reference evidence beyond science such as philosophical reasoning or common sense that aligns more with STR– than STR+, thereby concluding that STR– is true while STR+ is false. In the case that within the argument from relativity we are referring to STR–, then Markosian rejects the premise that special relativity entails there is no absolute simultaneity. Instead, he holds that since we are working under STR–, which claims special relativity does not entail there is no absolute present, that there does indeed exist a privileged hyper-plane of simultaneity. Although there are many hyper-planes of simultaneity, one of them is privileged and represents the absolute present, only we cannot discern, measure, or detect this.
                        </p>
                        <p className="premise">
                            I disagree with Markosian. Up until his discussion of STR+/–, I believe his points are reasonable. That is, the concern over whether special relativity contains or entails an absence of absolute simultaneity holds merit. However, I disagree with how Markosian proceeds regarding his analysis of STR+ and STR–. First considering the case of STR+, which holds that special relativity entails there is no absolute simultaneity, Markosian’s dismissal of special relativity as false seems premature and ill-supported. His reasoning is essentially that STR– is empirically equivalent to STR+ and that STR– possesses good <i>a priori</i> evidence that STR+ does not exhibit, therefore concluding that STR+ is false while STR– is true. However, he does not explicitly divulge what <i>a priori</i> evidence better supports STR– and not STR+ to the extent that we can render STR+ false. It seems he is referring to the notion that an absolute present is inherent to humans and that this puts STR– ahead of STR+. However, as mentioned, STR+ and STR– are both empirically equivalent. Therefore, it seems to me inappropriate to claim STR+ as false and STR– as true based on <i>a priori</i> evidence alone. To discount a theory as false, I believe, requires empirical evidence to disprove the theory or its premises, and <i>a priori</i> evidence alone seems insufficient to regard STR+ as false while maintaining STR– as true. I find this argument insufficient to truly count STR+ as false, and therefore the rejection of special relativity as false is also insufficiently concluded.
                        </p>
                        <p className="premise">
                            In considering the case that special relativity refers to STR–, I also disagree with Markosian’s conclusion. As mentioned, he holds that among observers and their relative hyper-planes of simultaneity, there exists one hyper-plane of simultaneity that is the privileged, absolute present, only there is no way to detect it. Where, then, does this privileged hyper-plane of simultaneity come from? What dictates which hyper-plane should be privileged and thus represent the absolute present? Markosian offers no responses or reasons behind these questions, and his only rationale behind STR– is the <i>a priori</i> evidence he mentions, which suggests that the notion of an absolute present seems inherent to humans and thus something we should aim to preserve. This, to me, seems insufficient a reason to believe that there exists some arbitrarily selected hyper-plane of simultaneity representing the absolute present, especially after acknowledging we have empirical evidence supporting relative hyper-planes of simultaneity. Rather, it seems that Markosian is using the blanket of <i>a priori</i> evidence to maintain his position about an absolute present. While <i>a priori</i> evidence does not count for nothing, I find the empirical findings of relative hyper-planes of simultaneity, which support the conclusion of no absolute present, stronger evidence than <i>a priori</i> notions of an absolute present, which conclude, with no empirically based evidence, that one such hyper-plane of simultaneity is privileged and represents the absolute present.
                        </p>
                        <p className="premise">
                            Therefore, I conclude that Markosian’s objections to the argument from relativity are unjustified and thus, that the argument from relativity is sound.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Presentism;