import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import "./Chart.scss"
import { Paper } from '@mui/material'

function Chart({ data = [], Title = "", dataKey = "", grid = false }) {

  // ensure safe array
  const safeData = Array.isArray(data) ? data : []

  return (

    <div className='Chart'>

      <Paper elevation={3} style={{ padding: "12px" }}>

        <h3 className="ChartTitle">{Title}</h3>

        <ResponsiveContainer width="100%" aspect={4 / 1}>

          <LineChart data={safeData}>

            <XAxis dataKey="name" stroke='grey' />

            <Line
              type="monotone"
              dataKey={dataKey}
              stroke='grey'
            />

            <Tooltip />

            {grid && (
              <CartesianGrid
                stroke='#e0dfdf'
                strokeDasharray="5 5"
              />
            )}

          </LineChart>

        </ResponsiveContainer>

      </Paper>

    </div>

  )
}

export default Chart
