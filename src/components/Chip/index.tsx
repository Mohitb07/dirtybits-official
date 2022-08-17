import { Chip } from '@mantine/core';

// const useStyles = createStyles((theme, _params, getRef) => ({
//   label: {
//     '&[data-checked]': {
//       '&, &:hover': {
//         backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
//         color: theme.white,
//       },

//       [`& .${getRef('iconWrapper')}`]: {
//         color: theme.white,
//       },
//     },
//   },

//   iconWrapper: {
//     ref: getRef('iconWrapper'),
//   },
// }));

const StyledChip = ({ dataList }: { dataList: string[] }) => {
  // const router = useRouter();
  return (
    <Chip.Group position="center" multiple defaultValue={['react']}>
      {dataList.map((chip: string) => (
        <Chip
          color="violet"
          variant="filled"
          radius="lg"
          key={chip}
          value={chip}
          checked
        >
          {chip}
        </Chip>
      ))}
    </Chip.Group>
  );
};

export default StyledChip;
