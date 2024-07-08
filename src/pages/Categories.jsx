import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";

const categories = [
  { name: "General Discussion", posts: 120, lastPost: "2023-10-01" },
  { name: "Tech News", posts: 80, lastPost: "2023-10-02" },
  { name: "Programming", posts: 200, lastPost: "2023-10-03" },
  { name: "Hardware", posts: 50, lastPost: "2023-10-04" },
];

const Categories = () => {
  return (
    <div className="space-y-4">
      {categories.map((category, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Posts: {category.posts}</p>
            <p>Last Post: {category.lastPost}</p>
          </CardContent>
        </Card>
      ))}
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous href="#" />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">2</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Next href="#" />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  );
};

export default Categories;