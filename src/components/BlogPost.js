import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  // In a real application, you would fetch the blog post from a database or CMS using the slug.
  // For this example, we'll use the same allPosts array from the Blog component.
  const allPosts = [
    {
      title: 'Mastering the IELTS Speaking Test: Tips for a High Score',
      content: `
        <p>The IELTS speaking test can be daunting, but with the right preparation, you can ace it. Here are some tips to help you impress the examiner and achieve a high band score:</p>
        <ul class="list-disc list-inside mt-4">
          <li><strong>Practice regularly:</strong> The more you practice, the more confident you will become. Find a speaking partner or record yourself to identify areas for improvement.</li>
          <li><strong>Expand your vocabulary:</strong> Use a wide range of vocabulary to express yourself. Learn new words and phrases related to common IELTS topics.</li>
          <li><strong>Speak fluently and coherently:</strong> Organize your thoughts before you speak and use linking words to connect your ideas. Avoid long pauses and hesitations.</li>
          <li><strong>Pay attention to grammar and pronunciation:</strong> Use correct grammar and pronounce words clearly. The examiner will be assessing your accuracy and clarity.</li>
        </ul>
        <p class="mt-4">By following these tips, you can significantly improve your performance in the IELTS speaking test and achieve the score you deserve.</p>
      `,
      date: 'May 15, 2024',
      author: 'John Doe',
      category: 'Speaking',
      slug: 'mastering-the-ielts-speaking-test',
    },
    {
      title: 'Common Mistakes to Avoid in the IELTS Writing Task 2',
      content: `
        <p>The IELTS writing task 2 requires you to write an essay on a given topic. To get a high score, you need to avoid these common mistakes:</p>
        <ul class="list-disc list-inside mt-4">
          <li><strong>Not addressing all parts of the question:</strong> Make sure you understand the question and address all its parts in your essay.</li>
          <li><strong>Lack of a clear thesis statement:</strong> Your essay should have a clear thesis statement that presents your main argument.</li>
          <li><strong>Poor organization and structure:</strong> Organize your essay into paragraphs with clear topic sentences. Use linking words to connect your ideas.</li>
          <li><strong>Grammatical errors and spelling mistakes:</strong> Proofread your essay carefully to avoid errors that can lower your score.</li>
        </ul>
        <p class="mt-4">By avoiding these common mistakes, you can write a high-scoring essay in the IELTS writing task 2.</p>
      `,
      date: 'May 10, 2024',
      author: 'Jane Smith',
      category: 'Writing',
      slug: 'common-mistakes-in-ielts-writing',
    },
    {
      title: 'How to Improve Your Reading Speed and Comprehension for the IELTS',
      content: `
        <p>The IELTS reading section can be challenging, but with the right strategies, you can improve your speed and comprehension. Here's how:</p>
        <ul class="list-disc list-inside mt-4">
          <li><strong>Skim the passage for the main idea:</strong> Before you read the questions, skim the passage to get a general idea of what it is about.</li>
          <li><strong>Scan the passage for specific information:</strong> Once you have read the questions, scan the passage for keywords and phrases to find the answers.</li>
          <li><strong>Practice active reading:</strong> Engage with the text by highlighting keywords, taking notes, and summarizing paragraphs.</li>
          <li><strong>Improve your vocabulary:</strong> A strong vocabulary will help you understand the passage better and answer the questions more accurately.</li>
        </ul>
        <p class="mt-4">By practicing these techniques, you can improve your reading skills and achieve a high score in the IELTS reading section.</p>
      `,
      date: 'May 5, 2024',
      author: 'Peter Jones',
      category: 'Reading',
      slug: 'improve-your-reading-speed-for-ielts',
    },
    {
      title: 'Top 5 Strategies for Acing the IELTS Listening Test',
      content: `
        <p>The IELTS listening test requires you to listen to a series of recordings and answer questions. Here are the top 5 strategies to help you ace the test:</p>
        <ul class="list-disc list-inside mt-4">
          <li><strong>Listen for keywords:</strong> Pay attention to keywords in the questions and listen for them in the recording.</li>
          <li><strong>Predict the answers:</strong> Before you listen, try to predict the type of information that is required for each answer.</li>
          <li><strong>Don't get stuck on one question:</strong> If you miss an answer, move on to the next question. You can come back to it later if you have time.</li>
          <li><strong>Check your answers:</strong> After each section, you will be given time to check your answers. Make sure you have answered all the questions and that your spelling is correct.</li>
          <li><strong>Practice with a variety of materials:</strong> Listen to a variety of English audio materials, such as podcasts, news reports, and lectures, to improve your listening skills.</li>
        </ul>
        <p class="mt-4">By using these strategies, you can improve your performance in the IELTS listening test and achieve a high band score.</p>
      `,
      date: 'April 28, 2024',
      author: 'Emily Davis',
      category: 'Listening',
      slug: 'top-5-strategies-for-ielts-listening',
    },
  ];

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">{post.category}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{post.date} by {post.author}</p>
        </div>

        <div className="mt-10 prose prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div>
  );
};

export default BlogPost;
