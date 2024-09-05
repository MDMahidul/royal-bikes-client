import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type TBreadCItemProps = {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
};

type TBreadCProps = {
  items: TBreadCItemProps[];
};

const BreadCrumb = ({ items }: TBreadCProps) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList className="mb-5 font-semibold text-primary dark:text-gray-300 capitalize">
          {items.map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.isCurrentPage ? (
                <BreadcrumbPage className="text-gray-500 dark:text-gray-400  font-semibold">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
