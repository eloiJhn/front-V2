import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChampionsCard from "./ChampionsCard";

export default function ChampionsData(props) {
  const { champions } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {champions?.map((champion) => {
          return (
            <Grid item xs={3}>
              <ChampionsCard key={champion?.nickname} champion={champion}></ChampionsCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}