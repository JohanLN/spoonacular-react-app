import Meta from '@/features/recipes/types/entities/meta.entity';
import useSearch from '@/hooks/useSearch';
import { useMemo } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

interface PaginationWithLinkProps {
  meta: Meta;
}

const PaginationWithLink = (props: PaginationWithLinkProps) => {
  const { meta } = props;
  const { setOffset } = useSearch();
  const { offset, number, totalResults } = meta;

  const maxPage = useMemo(() => {
    return Math.ceil(totalResults / number);
  }, [number, totalResults]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              offset <= 1 ? 'pointer-events-none opacity-50' : undefined
            }
            onClick={() => {
              console.log('Prev');
              setOffset(offset - 1);
            }}
            size="default"
          />
        </PaginationItem>
        {offset > 1 && (
          <>
            {offset > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  setOffset(offset - 1);
                }}
              >
                {offset - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink isActive>{offset}</PaginationLink>
        </PaginationItem>
        {offset < maxPage && (
          <>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  setOffset(offset + 1);
                }}
              >
                {offset + 1}
              </PaginationLink>
            </PaginationItem>
            {offset < maxPage - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}
        <PaginationItem>
          <PaginationNext
            className={
              offset >= maxPage ? 'pointer-events-none opacity-50' : undefined
            }
            onClick={() => {
              console.log('Next');
              setOffset(offset + 1);
            }}
            size="default"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationWithLink;
