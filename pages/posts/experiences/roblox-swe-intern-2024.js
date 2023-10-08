import { Container, List, Link, ListItem } from '@chakra-ui/react'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import {
  PostListItem,
  PostBigHeading,
  PostSmallHeading,
  ImageCaption,
  Title,
  IC,
  PostImage,
  TableOfContents,
  B
} from '../../../components/posts'

import star from '../../../public/images/posts/STARMethod.png'
import process from '../../../public/images/posts/processImage.png'

const title = 'Roblox SWE Intern 2024'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>{title}</Title>
      <PostBigHeading>Table of Contents</PostBigHeading>
      <List>
        <TableOfContents title="Process" />
        <TableOfContents title="Online Assessment (OA)" />
        <TableOfContents title="Virtual Onsite" />
        <TableOfContents title="Learnings" />
        <TableOfContents title="Conclusions" />
      </List>
      <PostBigHeading>Introduction</PostBigHeading>
      <P>
        While I didn&apos;t get the internship, this was an amazing experience.
        I learned so much about the interviewing process for becoming a software
        engineer, which is what I am sharing here. I hope others don&apos;t make
        the same mistakes as I did, so they can succeed in their interviews and
        get an offer. I certainly will be taking my learnings from this
        interview process and apply it for my next interview.
      </P>

      <PostSmallHeading>Process</PostSmallHeading>
      <P>
        The whole process for Roblox was quite lengthy. After applying, there is
        an online assessment (OA) automatically distributed to everyone. It
        consists of 2 Roblox games, a technical assessment, and a behavioural
        assessment. I recommend taking the games and behavioural assessment
        seriously, they are a strong reflection of you as an applicant. If you
        pass the OA, you are then invited to the virtual onsite, which consists
        of 2 technical interviews and a behavioural interview. After you
        complete the virtual onsite, you then await a decision, and they
        typically get back to you within 2 weeks.
      </P>

      <PostImage src={process} alt="Process" />

      <PostSmallHeading>Online Assessment (OA)</PostSmallHeading>
      <P>
        The coding portion was fairly challenging for me, since this was the
        first kind of technical assessment I ever did. Roblox has a strong
        emphasis on problem solving, so be sure to think creatively to solve
        these problems. Practicing using Leetcode and other resources are
        necessary to succeed.
      </P>
      <P>
        The games were very creative and incredibly engaging. While I cannot
        disclose what they were exactly, just know they do test relevant skills
        for the position, otherwise Roblox wouldn&apos;t have included it in
        their assessment. So take it seriously, actually try on these games.
        Once again, think creatively and try to arrive at the most optimal
        solution to the problem.
      </P>
      <P>
        The behavioural assessment was fairly standard, it was similar to a
        behavioural interview. You are presented situations, and outline what
        you would do in those situations. Take this seriously and answer
        honestly. This evaluates if you&apos;d be a good fit for the team,
        nobody wants to have a coworker they hate working with.
      </P>

      <PostSmallHeading>Virtual Onsite</PostSmallHeading>
      <P>
        As previously alluded to, the virtual onsite consists of 2 45 minute
        technical interviews and a 30 minute behavioural interview. These are
        typically done in the same day, and each interview is done with a
        different Roblox employee.
      </P>
      <P>
        I highly recommend using their <B>Speak_</B> resource, it provides more
        insight into the whole process and provides information on what will be
        on the interview. There is a list of sample problems that cover the
        possible content, and will prepare you for the interview.
      </P>

      <PostSmallHeading>Learnings</PostSmallHeading>

      <PostSmallHeading>Prepare Earlier</PostSmallHeading>
      <P>
        You can never prepare too early. Even if you don&apos;t have an
        interview lined up, it is best to prepare ahead of time so you can learn
        more algorithms, have a greater understanding of data structures, and
        solve more problems. It is best to space your learning out over a longer
        period of time, since you are more likely to retain that information for
        a longer period of time. Then, when it comes to interview day, you have
        practiced numerous times and are familiar with common patterns in
        problems.
      </P>

      <PostSmallHeading>STAR Method</PostSmallHeading>
      <P>
        Note that the STAR method is most popular among the industry, but Roblox
        prefers the ATOLA framework. Either way, both are great guidelines to
        follow when answering interview questions. When approaching the
        behavioural interview, ensure you have prepared examples for common
        situations you may encounter in the everyday workplace. Focus on
        communication, conflicts, how you deal with situations. When answering
        the question, present your examples so that it follows the STAR method:{' '}
        <B>Situation, Task, Action, Result</B>.
      </P>
      <PostImage src={star} alt="STAR Method" />
      <P>
        <B>Situation:</B> outline what happened and the circumstances. Letting
        the interviewer know the background information and context for the
        situation that you are describing is crucial, so they can visualize what
        was going on.
      </P>
      <P>
        <B>Task:</B> describe your responsibilities in that situation. You are
        involved in this situation because you originally had some
        responsibility to attend to. It is important to let the interviewer know
        what you were tasked to do.
      </P>
      <P>
        <B>Action:</B> describe what you did in that situation. Explain what you
        did and why you decided to take those steps to solve the problem. Go
        step by step on how you tackled the problem, and give precise details.
      </P>
      <P>
        <B>Result:</B> explain how your actions led to a certain result, and how
        it made a difference. If possible, quanify your results so the
        interviwer can better understand your impact. Share your learnings from
        the situation, and how you plan to approach similar problems in the
        future.
      </P>
      <P>
        To better prepare, create a document that outlines various situations
        using the STAR method for common questions that might appear on the
        interview. Don&apos;t necessarily try to memorize the whole document,
        rather track main ideas to help construct the foundation for your
        answers.
      </P>

      <PostSmallHeading>Take Care of Yourself</PostSmallHeading>
      <P>
        As cheesy as this sounds, I&apos;d argue it is the most important.
        Interviews are stressful, and take up a lot of energy. Ensure you
        continue <B>eating healthy, get rest, and take time to destress</B>. I
        fell into the trap of constantly grinding for the interview, just to
        feel extremely tired for it due to lack of sleep and eating poorly. I
        think I would&apos;ve performed much better had I just done these little
        things right.
      </P>

      <PostSmallHeading>Conclusions</PostSmallHeading>
      <P>
        I am incredibly thankful for Roblox to allow me to partake in their
        interview process for a software engineer intern position. It has taught
        me a lot about the difficulties on finding a job, preparing for the
        technical and behavioural interviews, as well as balancing everything
        else in life. I think that it&apos;s great for me to fail at getting an
        offer, because it has made me recognize and learn a great deal about
        myself. I am far more disciplined and motivated to secure an intern
        position for next summer. While it may not be at Roblox, I am excited to
        see what internship I get to work at for the summer of 2024. It&apos;s
        been a privilege to undergo this experience, and I will undoubtly work
        harder for the next one.
      </P>
    </Container>
  </Layout>
)

export default Work
