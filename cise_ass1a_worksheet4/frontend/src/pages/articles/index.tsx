import SortableTable from "../../components/SortableTable";
import { GetStaticProps, NextPage } from "next";
import data from '../../utils/dummydata.json';


interface ArticlesInterface {
    id: string;
    title: string;
    authors: [string];
    source: string;
    publication_year: Number;
    doi: string;
    summary: string;
    linked_discussion: string;
}

type ArticlesProps = {
    articles: ArticlesInterface[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
    const headers: { key: keyof ArticlesInterface; label: string }[] = [
        { key: "title", label: "Title" },
        { key: "authors", label: "Authors" },
        { key: "source", label: "Source" },
        { key: "publication_year", label: "Publication Year" },
        { key: "doi", label: "DOI" },
        { key: "summary", label: "Summary"},
        { key: "linked_discussion", label: "Linked Discussion" },
    ];
    return (
        <div className="container">
            <h1>Articles Index Page</h1>
            <p>Page containing a table of articles:</p>
            <SortableTable headers={headers} data={articles} />
        </div>
    );
};

export const getStaticProps: GetStaticProps<ArticlesProps> = async (_) => {
    const res = await fetch('http://localhost:8082/api/articles'); // Adjust the URL to match your server
    const data = await res.json();
  
    // Map the data to ensure all articles have consistent property names
    const articles = data.map((article: any) => ({
      id: article._id,
      title: article.title,
      authors: article.authors.join(', '), // If authors is an array
      source: article.source,
      publication_year: article.publication_year.toString(), // If pubyear is a number
      doi: article.doi,
      summary: article.summary,
      linked_discussion: article.linked_discussion,
    }));
  
    return {
      props: {
        articles,
      },
    };
  };

export default Articles;